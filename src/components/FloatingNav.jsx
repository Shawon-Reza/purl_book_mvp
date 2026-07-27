import React, { useEffect, useRef } from "react";
import useIsMobile from "../book/useIsMobile";

const menuItems = [
  { label: "Cover", id: "cover", icon: "📖" },
  { label: "About", id: "about", icon: "✦", },
  { section: "Services" },
  { label: "Massage", id: "massage-pricing", icon: "💆" },
  { label: "Contact", id: "contact", icon: "📞" },
  { label: "Opening Hours", id: "hours", icon: "🕐" },
];

function FloatingNav({ isOpen, onToggle, onNavigate, currentPageId }) {
  const panelRef = useRef(null);
  const isMobile = useIsMobile(640);


  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onToggle();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onToggle]);


  return (
    <div className={`floating-nav${isOpen ? " open" : ""}`} ref={panelRef}>
      {/* Round toggle button */}
      <button
        // className="nav-toggle"
        className={isMobile ? " cursor-pointer" : "nav-toggle"}
        onClick={onToggle}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Vertical sliding menu panel */}
      <nav className="nav-panel" aria-hidden={!isOpen}>
        <div className="nav-panel-header">
          <span className="nav-brand">PURLS</span>
          <span className="nav-sub">Mobile Wellness Services</span>
        </div>

        <ul>
          {menuItems.map((item, idx) => {
            if (item.section) {
              return (
                <li key={`section-${idx}`} className="nav-section-label">
                  <span>{item.section}</span>
                </li>
              );
            }

            // Determine if this nav item is currently active
            const massageIds = [
              "massage-pricing", "massage-remedial-deep", "massage-sports-pregnancy",
              "massage-lymphatic-aroma", "massage-child-indian", "massage-thai-aged",
              "massage-palliative-bereavement"
            ];
            const isActive =
              item.id === currentPageId ||
              (item.id === "massage-pricing" && massageIds.includes(currentPageId));

            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default FloatingNav;
