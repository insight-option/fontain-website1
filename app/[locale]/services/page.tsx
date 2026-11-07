import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/services", title: dict.services.pageTitle, description: dict.services.pageSubtitle });
}

export default async function ServicesPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="blob" style={{ width: 460, height: 460, top: -200, insetInlineEnd: -140, background: "#dcd6ff" }} />
          <div className="blob" style={{ width: 400, height: 400, top: -120, insetInlineStart: -160, background: "#bfe0ff", animationDelay: "-8s" }} />
        </div>
        <div className="container-x">
          <SectionHeading as="h1" eyebrow={dict.services.eyebrow} title={dict.services.pageTitle} subtitle={dict.services.pageSubtitle} />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <ServicesGrid locale={locale} dict={dict} variant="grouped" />
        </div>
      </section>

      <CTA locale={locale} dict={dict} />
    </>
  );
}
