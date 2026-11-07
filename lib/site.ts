/**
 * Central site configuration.
 * TODO (client): replace the placeholder contact details below with the real ones.
 */
export const site = {
  name: "Fontain",
  nameAr: "فونتان",
  legalName: "Fontain",
  url: "https://fontain.qa", // TODO: real domain
  email: "hello@fontain.qa", // TODO: real email
  phone: "+974 0000 0000", // TODO: real phone
  /** International format without "+", used for wa.me links */
  whatsapp: "97400000000", // TODO: real WhatsApp number
  address: {
    en: "Doha, Qatar",
    ar: "الدوحة، قطر",
  },
  mapsUrl: "https://maps.google.com/?q=Doha,Qatar",
  hours: {
    en: "Sun – Thu, 9:00 – 18:00",
    ar: "الأحد – الخميس، 9:00 – 18:00",
  },
  social: {
    instagram: "https://instagram.com/fontain", // TODO
    facebook: "https://facebook.com/fontain", // TODO
    linkedin: "https://linkedin.com/company/fontain", // TODO
    x: "https://x.com/fontain", // TODO
    tiktok: "https://tiktok.com/@fontain", // TODO
  },
  founded: 2024,
} as const;

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

/** Build a localized path, e.g. localePath("ar", "/services") → "/ar/services" */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `/${locale}${clean}`;
}

/** Swap the locale segment of a pathname, keeping the rest of the URL. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const parts = pathname.split("/");
  if (parts.length > 1 && isLocale(parts[1])) {
    parts[1] = to;
    return parts.join("/") || `/${to}`;
  }
  return `/${to}${pathname === "/" ? "" : pathname}`;
}

export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
