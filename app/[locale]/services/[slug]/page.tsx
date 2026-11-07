import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import SpotlightGroup from "@/components/SpotlightGroup";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { isLocale, localePath, waLink, type Locale } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    locale,
    path: `/services/${service.slug}`,
    title: service.title[locale],
    description: service.short[locale],
  });
}

export default async function ServicePage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const service = getService(slug);
  if (!service) notFound();

  const dict = getDictionary(locale);
  const sd = dict.serviceDetail;
  const [a, b] = service.accent;
  const others = services.filter((s) => s.slug !== service.slug && s.group === service.group).slice(0, 3);
  const fallback = services.filter((s) => s.slug !== service.slug && !others.includes(s)).slice(0, 3 - others.length);
  const related = [...others, ...fallback];
  const waMessage =
    locale === "ar" ? `مرحباً فونتان، أود الاستفسار عن خدمة ${service.title.ar}.` : `Hi Fontain, I would like to ask about ${service.title.en}.`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="blob" style={{ width: 520, height: 520, top: -220, insetInlineEnd: -160, background: a, opacity: 0.22 }} />
          <div className="blob" style={{ width: 420, height: 420, top: 40, insetInlineStart: -200, background: b, opacity: 0.2, animationDelay: "-10s" }} />
        </div>
        <div className="container-x">
          <Reveal>
            <Link href={localePath(locale, "/services")} className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-brand">
              <ArrowLeft size={16} className="rtl:-scale-x-100" aria-hidden="true" />
              {sd.backToServices}
            </Link>
          </Reveal>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal delay={60}>
                <span className="eyebrow">{dict.services.groups[service.group]}</span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">{service.title[locale]}</h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">{service.short[locale]}</p>
              </Reveal>
              <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
                <Link href={`${localePath(locale, "/contact")}?service=${service.slug}`} className="btn-primary px-7 py-3.5 text-base">
                  {sd.requestQuote}
                  <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
                </Link>
                <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-secondary px-7 py-3.5 text-base">
                  <MessageCircle size={18} className="text-whatsapp" aria-hidden="true" />
                  {dict.cta.whatsapp}
                </a>
              </Reveal>
            </div>
            <Reveal from="scale" delay={200} className="lg:col-span-4">
              <div className="relative mx-auto grid aspect-square w-full max-w-[260px] place-items-center">
                <div className="absolute inset-0 rounded-[2.5rem] opacity-20 blur-2xl" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} aria-hidden="true" />
                <div className="float relative grid h-40 w-40 place-items-center rounded-[2rem] text-white shadow-lift" style={{ background: `linear-gradient(135deg, ${a}, ${b})`, "--dur": "7s" } as CSSProperties}>
                  <ServiceIcon name={service.icon} size={72} strokeWidth={1.4} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview + features */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">{sd.overview}</span>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-2">{service.description[locale]}</p>
            </Reveal>
            <Reveal delay={100} className="mt-10">
              <h2 className="text-sm font-bold uppercase tracking-wide text-muted">{sd.idealFor}</h2>
              <ul className="mt-4 space-y-3">
                {service.idealFor[locale].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: a }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{sd.whatYouGet}</h2>
            </Reveal>
            <SpotlightGroup className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.features[locale].map((f, i) => (
                <Reveal key={f} delay={120 + i * 60}>
                  <div className="card spot flex h-full items-start gap-3 p-5" style={{ "--spot-color": a } as CSSProperties}>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}>
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-ink-2 sm:text-base">{f}</p>
                  </div>
                </Reveal>
              ))}
            </SpotlightGroup>
          </div>
        </div>
      </section>

      {/* Steps + tools */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal from="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface p-8 sm:p-12 lg:p-16">
              <div className="bg-dots absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="relative grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{sd.howWeWork}</h2>
                  <ol className="mt-8 space-y-6">
                    {service.steps.map((step, i) => (
                      <Reveal key={step.title[locale]} delay={i * 100} as="li" className="flex gap-5">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-base font-extrabold shadow-soft" style={{ color: a }} dir="ltr">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-ink">{step.title[locale]}</h3>
                          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted sm:text-base">{step.text[locale]}</p>
                        </div>
                      </Reveal>
                    ))}
                  </ol>
                </div>
                <div className="lg:col-span-5">
                  <h2 className="text-sm font-bold uppercase tracking-wide text-muted">{sd.tools}</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tools.map((tool, i) => (
                      <Reveal key={tool} delay={i * 50} from="scale" as="li">
                        <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-2 transition-all hover:-translate-y-0.5 hover:shadow-soft" dir="ltr">
                          {tool}
                        </span>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal from="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center text-white sm:px-12 lg:py-20" style={{ background: `linear-gradient(120deg, ${a}, ${b})` }}>
              <div className="bg-grid absolute inset-0 opacity-30 invert" aria-hidden="true" />
              <div className="relative">
                <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  {sd.cta} {service.title[locale]}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/85">{sd.ctaSub}</p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link href={`${localePath(locale, "/contact")}?service=${service.slug}`} className="btn bg-white px-7 py-3.5 text-base text-ink shadow-[0_12px_30px_-10px_rgb(0_0_0/0.35)] hover:-translate-y-0.5">
                    {sd.requestQuote}
                    <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
                  </Link>
                  <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5 text-base">
                    <MessageCircle size={18} aria-hidden="true" />
                    {dict.cta.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="pb-8">
        <div className="container-x">
          <Reveal className="mb-6 flex items-center gap-4">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">{sd.otherServices}</h2>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </Reveal>
          <SpotlightGroup className="grid gap-5 sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link href={localePath(locale, `/services/${s.slug}`)} className="card spot group flex h-full flex-col p-6" style={{ "--spot-color": s.accent[0] } as CSSProperties}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl text-white transition-transform duration-500 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${s.accent[0]}, ${s.accent[1]})` }}>
                    <ServiceIcon name={s.icon} size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{s.title[locale]}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.short[locale]}</p>
                </Link>
              </Reveal>
            ))}
          </SpotlightGroup>
        </div>
      </section>
    </>
  );
}
