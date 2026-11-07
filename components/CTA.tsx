import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { localePath, waLink, type Locale } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

export default function CTA({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.cta;
  const waMessage = locale === "ar" ? "مرحباً فونتان، أود مناقشة مشروع جديد." : "Hi Fontain, I would like to discuss a new project.";
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal from="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center text-white sm:px-12 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{ background: "linear-gradient(120deg, #0B6BFF 0%, #4C7DFF 40%, #7C5CFF 100%)" }}
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
              <div className="blob" style={{ width: 460, height: 460, top: -220, insetInlineStart: -120, background: "#00D1FF", opacity: 0.55 }} />
              <div className="blob" style={{ width: 420, height: 420, bottom: -240, insetInlineEnd: -80, background: "#FF4D8D", opacity: 0.45, animationDelay: "-9s" }} />
              <div className="bg-grid absolute inset-0 opacity-30 invert" />
            </div>
            <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{c.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-white/85">{c.subtitle}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={localePath(locale, "/contact")}
                className="btn bg-white px-7 py-3.5 text-base text-brand shadow-[0_12px_30px_-10px_rgb(0_0_0/0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgb(0_0_0/0.4)]"
              >
                {c.button}
                <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
              </Link>
              <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5 text-base">
                <MessageCircle size={18} aria-hidden="true" />
                {c.whatsapp}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
