"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Extra delay in ms for staggering siblings */
  delay?: number;
  /** Direction the element animates from */
  from?: "up" | "left" | "right" | "scale";
  as?: ElementType;
  className?: string;
  /** Intersection threshold (0–1) */
  threshold?: number;
  id?: string;
};

/**
 * Lightweight scroll-reveal wrapper. Adds `.is-visible` once the element
 * enters the viewport; all motion lives in CSS (see globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  from = "up",
  as: Tag = "div",
  className = "",
  threshold = 0.15,
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already revealed by the inline pre-hydration script (see lib/reveal-script.ts)
    if (el.classList.contains("is-visible")) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const style = delay ? ({ "--delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} data-from={from} style={style} suppressHydrationWarning>
      {children}
    </Tag>
  );
}
