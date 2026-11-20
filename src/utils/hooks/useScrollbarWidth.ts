import { useEffect } from "react";

export default function useScrollbarWidth() {
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-width", `${Math.max(0, width)}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
}
