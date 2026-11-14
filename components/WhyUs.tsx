import Image from "next/image";
import { BarChart3, Layers, MapPin, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightGroup from "./SpotlightGroup";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/site";

const icons = [Layers, Sparkles, MapPin, BarChart3, Zap, ShieldCheck];
const colors = ["#00B8A9", "#1D7CF2", "#0B1D33", "#00D4FF", "#F59E0B", "#15375C"];

export default function WhyUs({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const w = dict.why;
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={w.eyebrow} title={w.title} subtitle={w.subtitle} align="start" />
            <Reveal from="scale" delay={150} className="mt-10">
              <div className="relative overflow-hidden rounded-3xl bg-navy shadow-lift">
                <Image
                  src="/images/services-fountain.webp"
                  alt={locale === "ar" ? "فونتان — تسويق وإبداع وبرمجيات من منصة واحدة" : "Fontain — marketing, creative and software from one platform"}
                  width={1600}
                  height={900}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <SpotlightGroup className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {w.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const color = colors[i % colors.length];
            return (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <div className="card spot h-full p-6" style={{ "--spot-color": color } as React.CSSProperties}>
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl text-white"
                    style={{ background: `linear-gradient(135deg, ${color}, color-mix(in srgb, ${color} 60%, white))` }}
                  >
                    <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </SpotlightGroup>
      </div>
    </section>
  );
}
