import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_DELAY_MS = 5500;
const SWIPE_THRESHOLD_PX = 40;

export function wrapSlide(index: number, total: number): number {
  return ((index % total) + total) % total;
}

type Props = {
  slides: React.ReactNode[];
  label: string;
  arrowsTop?: string;
  stretch?: boolean;
  showArrows?: boolean;
};

export default function HeroCarousel({
  slides,
  label,
  arrowsTop = "top-1/2",
  stretch = false,
  showArrows = true,
}: Props) {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(
      () => setCurrent((index) => wrapSlide(index + 1, total)),
      AUTOPLAY_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [current, paused, total]);

  const goTo = (index: number) => setCurrent(wrapSlide(index, total));

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined) return;
    const delta = end - start;
    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) goTo(current + (delta < 0 ? 1 : -1));
  };

  const arrowClass = `absolute ${arrowsTop} z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#C8161D] shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:h-8 lg:w-8`;

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label={label}
      className="relative grid"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} de ${total}`}
          aria-hidden={index !== current}
          className={`transition-[opacity,visibility] duration-500 ease-out [grid-area:1/1] ${
            stretch ? "[&>*]:h-full" : ""
          } ${index === current ? "visible z-10 opacity-100" : "invisible opacity-0"}`}
        >
          {slide}
        </div>
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Banner anterior"
            onClick={() => goTo(current - 1)}
            className={`${arrowClass} ${showArrows ? "" : "hidden"} left-3 lg:left-6`}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Próximo banner"
            onClick={() => goTo(current + 1)}
            className={`${arrowClass} ${showArrows ? "" : "hidden"} right-3 lg:right-6`}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir para o banner ${index + 1}`}
                aria-current={index === current}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  index === current ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
