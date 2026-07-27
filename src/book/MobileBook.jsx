import React, { useRef, useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import HTMLFlipBook from "react-pageflip";

import FloatingNav from "../components/FloatingNav";
import MobileMassageCard from "../pages/massage_for_mobile_device/MobileMassageCard";
import { mobilePagesData } from "../pages/massage_for_mobile_device/mobilePagesData";
import useWindowSize from "./useWindowSize";

import "../styles/mobile-book.css";

// ── Route mappings ────────────────────────────────────────────────────────────
const desktopIdToMobileIndex = {
  cover: 0,
  about: 1,
  "massage-pricing": 2,
  "massage-remedial-deep": 3,
  "massage-sports-pregnancy": 5,
  "massage-lymphatic-aroma": 7,
  "massage-child-indian": 9,
  "massage-thai-aged": 11,
  "massage-palliative-bereavement": 13,
  contact: 15,
  hours: 16,
};

function getDesktopRouteForMobileId(mobileId) {
  const map = {
    cover: "cover",
    about: "about",
    "massage-pricing": "massage-pricing",
    "massage-remedial": "massage-remedial-deep",
    "massage-deep-tissue": "massage-remedial-deep",
    "massage-sports": "massage-sports-pregnancy",
    "massage-pregnancy": "massage-sports-pregnancy",
    "massage-lymphatic": "massage-lymphatic-aroma",
    "massage-aromatherapy": "massage-lymphatic-aroma",
    "massage-child": "massage-child-indian",
    "massage-indian-head": "massage-child-indian",
    "massage-thai": "massage-thai-aged",
    "massage-aged-care": "massage-thai-aged",
    "massage-palliative": "massage-palliative-bereavement",
    "massage-bereavement": "massage-palliative-bereavement",
    contact: "contact",
    hours: "hours",
  };
  return map[mobileId] ?? mobileId;
}

function resolveInitialIndex(pageId) {
  const exact = mobilePagesData.findIndex((p) => p.id === pageId);
  if (exact !== -1) return exact;
  return desktopIdToMobileIndex[pageId] ?? 0;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function MobileBook() {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const bookRef = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => resolveInitialIndex(pageId));

  // ── Refs to prevent feedback-loop double-flips ────────────────────────────
  // When handleFlip fires and calls navigate(), pageId changes and the
  // pageId-watcher useEffect would try to flip AGAIN (breaking backward flip).
  // isFlipFromBook guards against this.
  const isFlipFromBook = useRef(false);
  const pageIdRef = useRef(pageId);

  useEffect(() => {
    pageIdRef.current = pageId;
  }); // no deps — keeps ref always current after every render

  // ── Window size for the flipbook ─────────────────────────────────────────
  const { width: winW, height: winH } = useWindowSize();
  const DOT_NAV_H = 0; // height of just the dot row
  const bookH = Math.max((winH || window.innerHeight) - DOT_NAV_H, 400);
  const bookW = Math.min(winW || window.innerWidth, 500);

  // ── handleInit — jump to the URL's page on first render ──────────────────
  const handleInit = useCallback(() => {
    const index = resolveInitialIndex(pageId);
    if (index > 0 && bookRef.current) {
      setTimeout(() => {
        bookRef.current.pageFlip()?.flip(index, "bottom");
      }, 120);
    }
  }, [pageId]);

  // ── handleFlip — called by HTMLFlipBook after every page turn ─────────────
  // Only syncs the URL. Does NOT call flip() again (that would break backward).
  const handleFlip = useCallback(
    (e) => {
      const idx = e.data;
      const card = mobilePagesData[idx];
      if (!card) return;

      setCurrentIndex(idx);

      const desktopId = getDesktopRouteForMobileId(card.id);
      if (desktopId !== pageIdRef.current) {
        isFlipFromBook.current = true;
        navigate(`/${desktopId}`, { replace: true });
      }
    },
    [navigate]
  );

  // ── pageId-watcher — handles EXTERNAL navigation (FloatingNav / direct URL) ─
  useEffect(() => {
    if (isFlipFromBook.current) {
      isFlipFromBook.current = false;
      return; // URL changed because of a flip — don't flip again
    }
    if (!bookRef.current) return;
    const index = resolveInitialIndex(pageId);
    const pf = bookRef.current.pageFlip();
    if (!pf) return;

    const timer = setTimeout(() => {
      if (pf.getCurrentPageIndex() !== index) {
        pf.flip(index, "bottom");
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [pageId]);

  // ── FloatingNav ───────────────────────────────────────────────────────────
  const handleNavGo = useCallback(
    (id) => {
      setIsNavOpen(false);
      navigate(`/${id}`, { replace: true });
    },
    [navigate]
  );

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="mb-wrapper">
      <FloatingNav
        isOpen={isNavOpen}
        onToggle={() => setIsNavOpen((v) => !v)}
        onNavigate={handleNavGo}
        currentPageId={pageId}
      />

      {/* ── HTMLFlipBook ── */}
      <div className="mb-book-area">
        <HTMLFlipBook
          ref={bookRef}
          width={bookW}
          height={bookH}
          size="stretch"
          minWidth={260}
          maxWidth={500}
          minHeight={400}
          maxHeight={900}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={handleFlip}
          onInit={handleInit}
          drawShadow={true}
          flippingTime={700}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          className="mb-flipbook bg-[#EAE6DA] h-full! w-full"
        >
          {mobilePagesData.map((data) => (
            <MobileMassageCard key={data.id} data={data} />
          ))}
        </HTMLFlipBook>
      </div>

      {/* ── Dot indicators only — no buttons ── */}
      {/* <div className="mb-dot-row">
        {mobilePagesData.map((data, idx) => (
          <button
            key={data.id}
            aria-label={`Page ${idx + 1}`}
            aria-current={idx === currentIndex ? "page" : undefined}
            className={`mb-dot${idx === currentIndex ? " active" : ""}`}
            onClick={() => {
              const pf = bookRef.current?.pageFlip();
              if (!pf) return;
              const cur = pf.getCurrentPageIndex();
              if (idx !== cur) pf.flip(idx, idx < cur ? "top" : "bottom");
            }}
          />
        ))}
      </div> */}
    </div>
  );
}
