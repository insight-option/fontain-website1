import type { Metadata, Viewport } from "next";
import { Alexandria, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getDictionary } from "@/lib/i18n";
import { revealScript } from "@/lib/reveal-script";
import { siteUrl } from "@/lib/seo";
import { dirOf, isLocale, locales, site, type Locale } from "@/lib/site";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

const alexandria = Alexandria({
  subsets: ["arabic"],
  variable: "--font-ar",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: locale === "ar" ? `%s | ${site.nameAr}` : `%s | ${site.name}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: site.name,
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
    openGraph: {
      type: "website",
      siteName: locale === "ar" ? site.nameAr : site.name,
      locale: locale === "ar" ? "ar_QA" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} dir={dirOf(locale)} className={`${manrope.variable} ${alexandria.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        <Header locale={locale} nav={dict.nav} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <JsonLd locale={locale} />
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </body>
    </html>
  );
}
