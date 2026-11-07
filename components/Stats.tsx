import Counter from "./Counter";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { Dictionary } from "@/lib/i18n";

export default function Stats({ dict }: { dict: Dictionary }) {
  const s = dict.stats;
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-x">
        <Reveal from="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="blob" style={{ width: 420, height: 420, top: -200, insetInlineStart: -120, background: "#bfe0ff", opacity: 0.6 }} />
              <div className="blob" style={{ width: 380, height: 380, bottom: -220, insetInlineEnd: -100, background: "#dcd6ff", opacity: 0.6 }} />
              <div className="bg-dots absolute inset-0 opacity-60" />
            </div>
            <div className="relative">
              <SectionHeading eyebrow={s.eyebrow} title={s.title} />
              <dl className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
                {s.items.map((item, i) => (
                  <Reveal key={item.label} delay={i * 90} className="text-center">
                    <dd className="text-gradient text-5xl font-extrabold tracking-tight sm:text-6xl" dir="ltr">
                      <Counter value={item.value} suffix={item.suffix} />
                    </dd>
                    <dt className="mt-3 text-sm font-medium text-muted sm:text-base">{item.label}</dt>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
