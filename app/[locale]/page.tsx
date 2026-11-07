import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { isLocale, localePath, type Locale } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  return {
    ...buildMetadata({ locale, path: "", title: dict.meta.title, description: dict.meta.description }),
    title: { absolute: dict.meta.title },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Marquee items={dict.marquee.items} />

      <section id="services" className="relative py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={dict.services.eyebrow} title={dict.services.title} subtitle={dict.services.subtitle} />
          <div className="mt-14">
            <ServicesGrid locale={locale} dict={dict} variant="bento" />
          </div>
          <Reveal className="mt-10 text-center">
            <Link href={localePath(locale, "/services")} className="btn-secondary">
              {dict.services.viewAll}
              <ArrowRight size={16} className="rtl:-scale-x-100" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyUs dict={dict} />
      <Stats dict={dict} />
      <Process dict={dict} />
      <Testimonials dict={dict} />
      <FAQ dict={dict} />
      <CTA locale={locale} dict={dict} />
    </>
  );
}
