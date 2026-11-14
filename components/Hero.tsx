import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, MessageCircle, Play, TrendingUp } from "lucide-react";
import { localePath, type Locale } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

const v = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.hero;
  const c = h.cards;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-28">
      {/* Background */}
      <div className="bg-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="blob"
          style={{ width: 520, height: 520, top: -140, insetInlineStart: -120, background: "#c9e9ff", "--dur": "24s" } as CSSProperties}
        />
        <div
          className="blob"
          style={{ width: 460, height: 460, top: 120, insetInlineEnd: -160, background: "#c6f1ec", "--dur": "28s", "--delay": "-6s" } as CSSProperties}
        />
        <div
          className="blob"
          style={{ width: 380, height: 380, bottom: -160, insetInlineStart: "35%", background: "#c9f7ff", "--dur": "26s", "--delay": "-12s" } as CSSProperties}
        />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-6">
          <span className="eyebrow rise" style={v(0)}>
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-teal" />
            {h.badge}
          </span>
          <h1 className="rise mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl" style={v(1)}>
            {h.title1} <span className="text-gradient">{h.title2}</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl" style={v(2)}>
            {h.subtitle}
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={v(3)}>
            <Link href={localePath(locale, "/contact")} className="btn-primary px-7 py-3.5 text-base">
              {h.ctaPrimary}
              <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
            </Link>
            <Link href={localePath(locale, "/services")} className="btn-secondary px-7 py-3.5 text-base">
              {h.ctaSecondary}
            </Link>
          </div>
          <div className="rise mt-14 hidden items-center gap-3 text-xs font-medium text-muted lg:flex" style={v(5)}>
            <span className="grid h-8 w-5 place-items-start justify-center rounded-full border border-line pt-1.5">
              <span className="scroll-dot block h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            {h.scroll}
          </div>
        </div>

        {/* Visual */}
        <div className="rise lg:col-span-6" style={v(3)}>
          <div className="relative mx-auto aspect-[9/10] w-full max-w-[580px] sm:aspect-[5/4]">
            {/* Main dashboard card */}
            <div className="glow-border absolute inset-x-8 bottom-6 top-14 rounded-3xl bg-white/90 p-5 shadow-lift sm:inset-x-12 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-whatsapp" />
                  <span className="text-xs font-semibold text-ink-2">{c.live}</span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-surface p-4">
                  <p className="text-xs text-muted">{c.reach}</p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight text-ink" dir="ltr">
                    {c.reachValue}
                  </p>
                </div>
                <div className="rounded-2xl bg-surface p-4">
                  <p className="text-xs text-muted">{c.roas}</p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight text-gradient" dir="ltr">
                    {c.roasValue}
                  </p>
                </div>
              </div>
              <svg viewBox="0 0 320 110" className="mt-4 h-auto w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#00B8A9" stopOpacity="0.28" />
                    <stop offset="1" stopColor="#00B8A9" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#00B8A9" />
                    <stop offset="1" stopColor="#00D4FF" />
                  </linearGradient>
                </defs>
                <path d="M0,92 C30,88 50,70 85,74 S140,42 180,48 S240,22 320,8 L320,110 L0,110 Z" fill="url(#hero-area)" />
                <path
                  d="M0,92 C30,88 50,70 85,74 S140,42 180,48 S240,22 320,8"
                  fill="none"
                  stroke="url(#hero-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="chart-line"
                />
                <circle cx="320" cy="8" r="5" fill="#00B8A9" className="chart-dot" />
              </svg>
            </div>

            {/* Floating: leads */}
            <div
              className="float absolute -top-1 -start-1 w-44 rounded-2xl border border-line bg-white p-3 shadow-soft sm:start-0"
              style={{ "--delay": "0s", "--r": "-2deg" } as CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal to-cyan text-white">
                  <TrendingUp size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] leading-tight text-muted">{c.leads}</p>
                  <p className="text-lg font-extrabold leading-tight text-ink" dir="ltr">
                    {c.leadsValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating: WhatsApp */}
            <div
              className="float absolute -start-2 bottom-2 w-56 rounded-2xl border border-line bg-white p-3 shadow-soft sm:start-2"
              style={{ "--delay": "1.4s", "--dur": "7s", "--r": "1.5deg" } as CSSProperties}
            >
              <div className="flex items-start gap-2.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-whatsapp text-white">
                  <MessageCircle size={15} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-ink">{c.whatsapp}</p>
                  <p className="mt-1 rounded-xl rounded-ss-none bg-[#E7FFDB] px-3 py-1.5 text-xs text-ink-2">{c.waMsg}</p>
                </div>
              </div>
            </div>

            {/* Floating: AI video */}
            <div
              className="float absolute -end-1 top-[70%] w-40 -translate-y-1/2 rounded-2xl bg-navy p-3 text-white shadow-lift sm:end-0 sm:top-[62%] sm:w-44"
              style={{ "--delay": "0.7s", "--dur": "6.5s", "--r": "2deg" } as CSSProperties}
            >
              <div className="grid aspect-video place-items-center rounded-xl bg-gradient-to-br from-navy-2 via-blue to-cyan">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur">
                  <Play size={16} className="ms-0.5 fill-white" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-2.5 text-[11px] font-semibold">{c.video}</p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                <div className="progress-anim h-full rounded-full bg-gradient-to-r from-cyan to-teal" />
              </div>
              <p className="mt-1 text-[10px] text-white/60">{c.rendering}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
