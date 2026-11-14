import type { Metadata } from "next";
import { locales, site, type Locale } from "./site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

/** Brand share image (app/opengraph-image.png, 1200×630) — declared explicitly because the [locale] tree has no root layout to inherit it from. */
export const ogImage = { url: "/opengraph-image.png", width: 1200, height: 630, alt: "Fontain" };

type Args = {
  locale: Locale;
  /** Path without locale prefix, e.g. "" for home or "/services" */
  path?: string;
  title: string;
  description: string;
};

export function buildMetadata({ locale, path = "", title, description }: Args): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])) as Record<string, string>;
  languages["x-default"] = `/en${path}`;
  const url = `/${locale}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      siteName: locale === "ar" ? site.nameAr : site.name,
      locale: locale === "ar" ? "ar_QA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_QA",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.png"],
    },
  };
}
