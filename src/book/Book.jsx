import React, { useRef, useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import HTMLFlipBook from "react-pageflip";

import FloatingNav from "../components/FloatingNav";

import Cover from "../pages/Cover";
import About from "../pages/About";
import MassagePricing from "../pages/massage/Pricing";
import MassageRemedialDeep from "../pages/massage/RemedialDeep";
import MassageSportsPregnancy from "../pages/massage/SportsPregnancy";
import MassageLymphaticAroma from "../pages/massage/LymphaticAroma";
import MassageChildIndian from "../pages/massage/ChildIndian";
import MassageThaiAged from "../pages/massage/ThaiAged";
import MassagePalliativeBereavement from "../pages/massage/PalliativeBereavement";
import Contact from "../pages/Contact";
import Hours from "../pages/Hours";

import "../styles/book.css";
import useScreenSize from "./useScreenSize";
import useIsMobile from "./useIsMobile";

// Single source of truth for all pages
const pagesConfig = [
  { id: "cover", Component: Cover },
  { id: "about", Component: About },
  { id: "massage-pricing", Component: MassagePricing },
  { id: "massage-remedial-deep", Component: MassageRemedialDeep },
  { id: "massage-sports-pregnancy", Component: MassageSportsPregnancy },
  { id: "massage-lymphatic-aroma", Component: MassageLymphaticAroma },
  { id: "massage-child-indian", Component: MassageChildIndian },
  { id: "massage-thai-aged", Component: MassageThaiAged },
  { id: "massage-palliative-bereavement", Component: MassagePalliativeBereavement },
  { id: "contact", Component: Contact },
  { id: "hours", Component: Hours },
];

const getPageIndex = (id) => pagesConfig.findIndex((p) => p.id === id);

function Book() {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const bookRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMountedRef = useRef(false);
  const lastFlippedRef = useRef(null);


  // ============== SCreen Size Hook ==============
  const isMobile = useIsMobile(640); // treats < 640px as mobile
  console.log("Mobile =======", isMobile)
  const { bookWidth, bookHeight } = useScreenSize();
  console.log("Screen =====", { bookWidth, bookHeight });

  // On mount, navigate to the correct page index
  useEffect(() => {
    const index = getPageIndex(pageId);
    if (index === -1) {
      navigate("/cover", { replace: true });
      return;
    }

    if (!bookRef.current) return;

    const pageFlip = bookRef.current.pageFlip();
    if (!pageFlip) return;

    // Small delay to let the flip book render before flipping
    const timeout = setTimeout(() => {
      const current = pageFlip.getCurrentPageIndex();
      if (current !== index) {
        lastFlippedRef.current = index;
        pageFlip.flip(index, "top");
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [pageId, navigate]);

  // After each flip, sync URL
  const handleFlip = useCallback((e) => {
    const current = pagesConfig[e.data];
    if (current && current.id !== pageId) {
      navigate(`/${current.id}`, { replace: true });
    }
  }, [pageId, navigate]);

  const handleInit = useCallback(() => {
    isMountedRef.current = true;
    // On init, flip to the correct page
    const index = getPageIndex(pageId);
    if (index > 0 && bookRef.current) {
      setTimeout(() => {
        bookRef.current.pageFlip()?.flip(index, "top");
      }, 100);
    }
  }, [pageId]);

  const goTo = useCallback((id) => {
    navigate(`/${id}`);
    setIsNavOpen(false);
  }, [navigate]);

  return (
    <div className="book-wrapper bg-[#EBE7DB]!">
      {/* Floating Navigation */}
      <FloatingNav
        isOpen={isNavOpen}
        onToggle={() => setIsNavOpen((v) => !v)}
        onNavigate={goTo}
        currentPageId={pageId}
      />



      <HTMLFlipBook
        ref={bookRef}
        width={bookWidth}
        height={bookHeight}
        size="stretch"
        minWidth={300}
        maxWidth={980}
        minHeight={380}
        maxHeight={1400}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={false}
        onFlip={handleFlip}
        onInit={handleInit}

        drawShadow={true}
        flippingTime={800}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className="bg-[#EAE6DA] h-full! w-full purls-book"

      >
        {pagesConfig.map(({ id, Component }) => (
          <Component key={id} className="shadow-2xl " />
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Book;