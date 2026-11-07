"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { localePath, type Locale } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

export default function Header({ locale, nav }: { locale: Locale; nav: Dictionary["nav"] }) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: localePath(locale), label: nav.home, exact: true },
    { href: localePath(locale, "/services"), label: nav.services },
    { href: localePath(locale, "/about"), label: nav.about },
    { href: localePath(locale, "/contact"), label: nav.contact },
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass border-b border-line/80 shadow-[0_8px_30px_-16px_rgb(11_18_32/0.18)]" : "bg-transparent"
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-[height] duration-500 ${solid ? "h-16" : "h-[76px]"}`}>
        <Link href={localePath(locale)} aria-label={locale === "ar" ? "فونتان — الرئيسية" : "Fontain — Home"} className="shrink-0">
          <Logo locale={locale} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" aria-current={isActive(l.href, l.exact) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={nav.switchLang} ariaLabel={nav.switchLangAria} />
          <Link href={localePath(locale, "/contact")} className="btn-primary py-2.5!">
            {nav.getStarted}
            <ArrowUpRight size={16} className="rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} label={nav.switchLang} ariaLabel={nav.switchLangAria} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.close : nav.menu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand/40 hover:text-brand"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          open ? "max-h-[85vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 pb-6 pt-2" aria-label={locale === "ar" ? "قائمة الجوال" : "Mobile navigation"}>
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href, l.exact) ? "page" : undefined}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              className={`rounded-xl px-4 py-3 text-lg font-semibold transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              } ${isActive(l.href, l.exact) ? "bg-surface text-brand" : "text-ink hover:bg-surface"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={localePath(locale, "/contact")}
            style={{ transitionDelay: open ? `${80 + links.length * 60}ms` : "0ms" }}
            className={`btn-primary mt-3 w-full transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            {nav.getStarted}
            <ArrowUpRight size={16} className="rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
