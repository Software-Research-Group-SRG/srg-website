import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the new page layout has rendered before scrolling
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 10);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
