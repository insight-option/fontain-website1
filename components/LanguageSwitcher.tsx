"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { otherLocale, switchLocalePath, type Locale } from "@/lib/site";

type Props = {
  locale: Locale;
  label: string;
  ariaLabel: string;
  className?: string;
};

export default function LanguageSwitcher({ locale, label, ariaLabel, className = "" }: Props) {
  const pathname = usePathname() || "/";
  const target = otherLocale(locale);
  const href = switchLocalePath(pathname, target);

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      title={ariaLabel}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
      }}
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink-2 transition-all hover:border-brand/40 hover:text-brand ${className}`}
    >
      <Languages size={16} strokeWidth={2} aria-hidden="true" />
      <span className={target === "ar" ? "font-arabic" : "font-sans"}>{label}</span>
    </Link>
  );
}
