"use client";

import { useCallback, type ReactNode } from "react";

/**
 * Attaches a single pointer listener to a container and updates
 * `--mx/--my` on every `.spot` child so the CSS radial glow follows the cursor.
 */
export default function SpotlightGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const cards = e.currentTarget.querySelectorAll<HTMLElement>(".spot");
    for (const card of cards) {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }
  }, []);

  return (
    <div className={className} onPointerMove={onMove}>
      {children}
    </div>
  );
}
