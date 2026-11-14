import Image from "next/image";
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
          <div className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] bg-navy text-white lg:min-h-[500px]">
            {/* Brand hologram artwork: the logo sits on the right of the image, so copy stays on the physical left in both directions */}
            <Image
              src="/images/brand-hologram.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover object-[22%_50%] lg:object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/10" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="relative mr-auto flex min-h-[460px] max-w-xl flex-col justify-center px-7 py-16 sm:px-12 lg:min-h-[500px] lg:px-16">
              <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{c.title}</h2>
              <p className="mt-5 max-w-md text-pretty text-lg text-white/80">{c.subtitle}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={localePath(locale, "/contact")}
                  className="btn bg-white px-7 py-3.5 text-base text-navy shadow-[0_12px_30px_-10px_rgb(0_0_0/0.45)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgb(0_212_255/0.45)]"
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
