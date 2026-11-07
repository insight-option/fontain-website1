import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { Dictionary } from "@/lib/i18n";

export default function Process({ dict }: { dict: Dictionary }) {
  const p = dict.process;
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} />
        <Reveal className="relative mt-16" threshold={0.2}>
          {/* Connector line (desktop) */}
          <div aria-hidden="true" className="absolute inset-x-[10%] top-7 hidden h-px lg:block">
            <div className="timeline-line h-full w-full origin-left bg-gradient-to-r from-brand via-aqua to-violet rtl:origin-right" style={{ transformOrigin: "inline-start" }} />
          </div>
          {/* Connector line (mobile) */}
          <div aria-hidden="true" className="absolute top-0 bottom-0 start-7 w-px lg:hidden">
            <div className="timeline-line h-full w-full bg-gradient-to-b from-brand via-aqua to-violet" />
          </div>
          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {p.steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 lg:block">
                <Reveal delay={i * 120} from="scale" className="shrink-0">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-white text-lg font-extrabold text-brand shadow-soft lg:mx-auto">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/10 to-aqua/10" aria-hidden="true" />
                    <span className="relative" dir="ltr">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </Reveal>
                <Reveal delay={i * 120 + 80} className="lg:mt-6 lg:text-center">
                  <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
