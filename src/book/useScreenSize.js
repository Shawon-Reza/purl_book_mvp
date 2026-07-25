import { useState, useEffect } from "react";

// ============================================
// 👉 CHANGE THESE VALUES AS YOU LIKE
// ============================================
const sizes = {
  xs:  { bookWidth: 280, bookHeight: 400 },  // mobile ( < 640px )
  sm:  { bookWidth: 320, bookHeight: 460 },  // ≥ 640px
  md:  { bookWidth: 380, bookHeight: 640 },  // ≥ 768px
  lg:  { bookWidth: 410, bookHeight: 550 },  // ≥ 1024px
  xl:  { bookWidth: 620, bookHeight: 720 },  // ≥ 1280px
  "2xl": { bookWidth: 600, bookHeight: 610 }, // ≥ 1536px
};

function getBreakpoint(width) {
  if (width >= 1536) return "2xl";
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  if (width >= 640) return "sm";
  return "xs";
}

export default function useScreenSize() {
  const [size, setSize] = useState(sizes.xs); // default

  useEffect(() => {
    const update = () => {
      const bp = getBreakpoint(window.innerWidth);
      setSize(sizes[bp]);
    };

    update(); // set correct size on mount

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return size; // { bookWidth, bookHeight }
}