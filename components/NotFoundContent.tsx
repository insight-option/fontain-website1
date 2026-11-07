"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowLeft } from "lucide-react";
import { isLocale, localePath, type Locale } from "@/lib/site";

type Texts = { title: string; text: string; back: string };

const v = (i: number) => ({ "--i": i }) as CSSProperties;

/** Picks the language from the current URL so the 404 page stays a static server component. */
export default function NotFoundContent({ texts }: { texts: Record<Locale, Texts> }) {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  const locale: Locale = isLocale(seg) ? seg : "en";
  const t = texts[locale];

  return (
    <div className="container-x text-center">
      <p className="text-gradient rise text-8xl font-extrabold tracking-tight sm:text-9xl" dir="ltr" style={v(0)}>
        404
      </p>
      <h1 className="rise mt-4 text-3xl font-extrabold text-ink sm:text-4xl" style={v(1)}>
        {t.title}
      </h1>
      <p className="rise mx-auto mt-3 max-w-md text-muted" style={v(2)}>
        {t.text}
      </p>
      <div className="rise mt-8" style={v(3)}>
        <Link href={localePath(locale)} className="btn-primary">
          <ArrowLeft size={16} className="rtl:-scale-x-100" aria-hidden="true" />
          {t.back}
        </Link>
      </div>
    </div>
  );
}
