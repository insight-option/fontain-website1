import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { Dictionary } from "@/lib/i18n";

export default function FAQ({ dict }: { dict: Dictionary }) {
  const f = dict.faq;
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-3xl border border-line bg-white">
          {f.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60} as="div">
              <details className="group px-6 py-5 sm:px-8">
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-start text-base font-semibold text-ink sm:text-lg">
                  <span>{item.q}</span>
                  <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-open:border-brand group-open:bg-brand group-open:text-white">
                    <Plus size={16} aria-hidden="true" />
                  </span>
                </summary>
                <p className="faq-body mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
