import type { Metadata } from "next";
import { locales, site, type Locale } from "./site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
