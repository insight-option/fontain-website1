import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ArrowRight, Compass, Eye, Gem, MapPin, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightGroup from "@/components/SpotlightGroup";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { isLocale, site, type Locale } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/about", title: dict.nav.about, description: dict.about.intro });
}

const valueIcons = [Gem, Eye, Zap, Compass];
const valueColors = ["#0B6BFF", "#7C5CFF", "#F59E0B", "#00B8A9"];

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="blob" style={{ width: 480, height: 480, top: -220, insetInlineStart: -140, background: "#bfe0ff" }} />
          <div className="blob" style={{ width: 420, height: 420, top: 0, insetInlineEnd: -180, background: "#dcd6ff", animationDelay: "-9s" }} />
        </div>
        <div className="container-x">
          <SectionHeading as="h1" eyebrow={a.eyebrow} title={a.title} subtitle={a.intro} align="start" className="max-w-4xl" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <Reveal from="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20" style={{ background: "linear-gradient(120deg, #0B6BFF 0%, #4C7DFF 45%, #7C5CFF 100%)" }}>
              <div className="bg-grid absolute inset-0 opacity-30 invert" aria-hidden="true" />
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <div className="blob" style={{ width: 420, height: 420, top: -200, insetInlineEnd: -120, background: "#00D1FF", opacity: 0.5 }} />
              </div>
              <div className="relative max-w-3xl">
                <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">{a.missionTitle}</span>
                <p className="mt-6 text-balance text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">{a.mission}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading title={a.valuesTitle} />
          <SpotlightGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              const color = valueColors[i % valueColors.length];
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="card spot h-full p-6" style={{ "--spot-color": color } as CSSProperties}>
                    <span className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${color}, color-mix(in srgb, ${color} 60%, white))` }}>
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </SpotlightGroup>
        </div>
      </section>

      {/* Team + location */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card h-full p-8 sm:p-10">
              <h2 className="text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{a.teamTitle}</h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">{a.teamText}</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <div className="card relative h-full overflow-hidden p-8 sm:p-10">
              <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-aqua text-white">
                  <MapPin size={22} aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink">{a.locationTitle}</h2>
                <p className="mt-3 text-pretty text-muted">{a.locationText}</p>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
                  {site.address[locale]}
                  <ArrowRight size={14} className="rtl:-scale-x-100" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats dict={dict} />
      <CTA locale={locale} dict={dict} />
    </>
  );
}
