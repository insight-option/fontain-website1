import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { localePath, site, type Locale } from "@/lib/site";
import { services } from "@/lib/services";
import type { Dictionary } from "@/lib/i18n";

function Instagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Linkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.8 22h-6.9l-5.4-7.06L4.3 22H1.04l8.02-9.17L.6 2h7.07l4.88 6.45L18.24 2Zm-1.21 18h1.8L7.04 3.9H5.1L17.03 20Z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.6 2.6 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.4-2.47V9.66a5.7 5.7 0 0 0-.8-.06 5.7 5.7 0 0 0-5.7 5.7 5.7 5.7 0 0 0 5.7 5.7 5.7 5.7 0 0 0 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.26-1.48Z" />
    </svg>
  );
}

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.social.instagram, label: "Instagram", Icon: Instagram },
    { href: site.social.facebook, label: "Facebook", Icon: Facebook },
    { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
    { href: site.social.x, label: "X", Icon: XIcon },
  ];

  return (
    <footer className="relative mt-24 border-t border-line bg-surface/60">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href={localePath(locale)} aria-label="Fontain">
              <Logo locale={locale} size={44} />
            </Link>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {locale === "ar" ? "حلول رقمية. نمو. نتائج حقيقية." : "Digital. Tech. Growth."}
            </p>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted">{dict.footer.tagline}</p>
            <ul className="mt-6 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink-2 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand hover:shadow-soft"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-ink">{dict.footer.company}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: localePath(locale), label: dict.nav.home },
                { href: localePath(locale, "/services"), label: dict.nav.services },
                { href: localePath(locale, "/about"), label: dict.nav.about },
                { href: localePath(locale, "/contact"), label: dict.nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-ink">{dict.footer.services}</h3>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={localePath(locale, `/services/${s.slug}`)} className="text-muted transition-colors hover:text-brand">
                    {s.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-ink">{dict.footer.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-2.5 transition-colors hover:text-brand">
                  <Mail size={16} className="shrink-0 text-brand" aria-hidden="true" />
                  <span dir="ltr">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-brand">
                  <Phone size={16} className="shrink-0 text-brand" aria-hidden="true" />
                  <span dir="ltr">{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 transition-colors hover:text-brand">
                  <MapPin size={16} className="shrink-0 text-brand" aria-hidden="true" />
                  <span>{site.address[locale]}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {locale === "ar" ? site.nameAr : site.name}. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">{dict.footer.madeIn}</span>
            <LanguageSwitcher locale={locale} label={dict.nav.switchLang} ariaLabel={dict.nav.switchLangAria} />
          </div>
        </div>
      </div>
    </footer>
  );
}
