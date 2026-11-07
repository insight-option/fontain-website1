import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { isLocale, site, waLink, type Locale } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/contact", title: dict.nav.contact, description: dict.contact.subtitle });
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  const c = dict.contact;
  const waMessage = locale === "ar" ? "مرحباً فونتان، أود مناقشة مشروع جديد." : "Hi Fontain, I would like to discuss a new project.";
  const serviceOptions = services.map((s) => ({ value: s.slug, label: s.title[locale] }));

  const infoCards = [
    { Icon: MessageCircle, title: c.info.whatsappTitle, text: c.info.whatsappText, href: waLink(waMessage), color: "#25D366", external: true },
    { Icon: Mail, title: c.info.emailTitle, text: site.email, href: `mailto:${site.email}`, color: "#0B6BFF", ltr: true },
    { Icon: Phone, title: c.info.phoneTitle, text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, color: "#7C5CFF", ltr: true },
    { Icon: MapPin, title: c.info.locationTitle, text: site.address[locale], href: site.mapsUrl, color: "#FF4D8D", external: true },
    { Icon: Clock, title: c.info.hoursTitle, text: site.hours[locale], color: "#F59E0B" },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="blob" style={{ width: 480, height: 480, top: -220, insetInlineEnd: -140, background: "#bfe0ff" }} />
          <div className="blob" style={{ width: 400, height: 400, top: 40, insetInlineStart: -200, background: "#dcd6ff", animationDelay: "-7s" }} />
        </div>
        <div className="container-x">
          <SectionHeading as="h1" eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} align="start" />
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={80}>
            <Suspense fallback={<div className="card min-h-[520px] animate-pulse bg-surface" />}>
              <ContactForm locale={locale} form={c.form} serviceOptions={serviceOptions} />
            </Suspense>
          </Reveal>
          <div className="grid gap-4 self-start sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {infoCards.map(({ Icon, title, text, href, color, external, ltr }, i) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${color}, color-mix(in srgb, ${color} 65%, white))` }}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-ink">{title}</p>
                    <p className="mt-0.5 truncate text-sm text-muted" dir={ltr ? "ltr" : undefined}>
                      {text}
                    </p>
                  </div>
                </>
              );
              return (
                <Reveal key={title} delay={120 + i * 70}>
                  {href ? (
                    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="card flex items-center gap-4 p-5">
                      {inner}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4 p-5">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ dict={dict} />
    </>
  );
}
