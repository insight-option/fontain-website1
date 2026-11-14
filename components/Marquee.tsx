import type { CSSProperties } from "react";

export default function Marquee({ items, duration = 45 }: { items: readonly string[]; duration?: number }) {
  const list = [...items, ...items];
  return (
    <div className="marquee relative border-y border-line bg-surface/60 py-5" aria-hidden="true">
      <div className="marquee-track" style={{ "--dur": `${duration}s` } as CSSProperties}>
        {list.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap text-sm font-semibold tracking-wide text-ink-2">
            <span className="px-6">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-teal to-cyan" />
          </span>
        ))}
      </div>
    </div>
  );
}
