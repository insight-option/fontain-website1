import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import SpotlightGroup from "./SpotlightGroup";
import { localePath, type Locale } from "@/lib/site";
import { serviceGroups, services, servicesByGroup, type Service } from "@/lib/services";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  locale: Locale;
  dict: Dictionary;
  variant?: "bento" | "grouped";
};

function ServiceCard({ service, locale, dict, wide = false, index = 0 }: { service: Service; locale: Locale; dict: Dictionary; wide?: boolean; index?: number }) {
  const [a, b] = service.accent;
  return (
    <Reveal delay={(index % 3) * 70} className={`h-full ${wide ? "sm:col-span-2" : ""}`}>
      <Link
        href={localePath(locale, `/services/${service.slug}`)}
        className="card spot group flex h-full flex-col p-6 sm:p-7"
        style={{ "--spot-color": a } as CSSProperties}
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-[0_8px_20px_-8px_var(--spot-color)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
            style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
          >
            <ServiceIcon name={service.icon} size={22} />
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight size={16} className="rtl:-scale-x-100" aria-hidden="true" />
          </span>
        </div>
        <h3 className="mt-5 text-lg font-bold tracking-tight text-ink sm:text-xl">{service.title[locale]}</h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{service.short[locale]}</p>
        {wide && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {service.features[locale].slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-2">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand opacity-0 transition-all duration-500 group-hover:opacity-100 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1">
          {dict.services.learnMore}
          <ArrowRight size={14} className="rtl:-scale-x-100" aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
}

export default function ServicesGrid({ locale, dict, variant = "bento" }: Props) {
  if (variant === "grouped") {
    return (
      <div className="space-y-16">
        {serviceGroups.map((group) => (
          <div key={group}>
            <Reveal className="mb-6 flex items-center gap-4">
              <h3 className="text-xl font-bold text-ink sm:text-2xl">{dict.services.groups[group]}</h3>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </Reveal>
            <SpotlightGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByGroup(group).map((s, i) => (
                <ServiceCard key={s.slug} service={s} locale={locale} dict={dict} index={i} />
              ))}
            </SpotlightGroup>
          </div>
        ))}
      </div>
    );
  }

  // Bento: wide cards at positions 0 and 5 produce a 3-column rhythm (2+1 / 1+1+1 / 2+1 / 1+1+1)
  const wideAt = new Set([0, 5]);
  return (
    <SpotlightGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <ServiceCard key={s.slug} service={s} locale={locale} dict={dict} wide={wideAt.has(i)} index={i} />
      ))}
    </SpotlightGroup>
  );
}
