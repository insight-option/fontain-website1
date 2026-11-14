import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { Dictionary } from "@/lib/i18n";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials;
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="card flex h-full flex-col p-7">
                <Quote size={28} className="text-brand/30 rtl:-scale-x-100" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5 text-amber-400" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={14} className="fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-ink-2">“{item.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-navy-2 to-teal text-sm font-bold text-white">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
