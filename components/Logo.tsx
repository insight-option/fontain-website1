import type { Locale } from "@/lib/site";

type Props = {
  locale: Locale;
  className?: string;
  /** Show the wordmark next to the symbol */
  withText?: boolean;
  size?: number;
};

/**
 * Placeholder Fontain mark: a stylised fountain made of three rising streams.
 * TODO (client): swap the <svg> below for the official logo (e.g. /public/logo.svg).
 */
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fg1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B6BFF" />
          <stop offset="1" stopColor="#00D1FF" />
        </linearGradient>
        <linearGradient id="fg2" x1="48" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#0B6BFF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#fg1)" />
      <path
        d="M24 36c-6 0-10-3.6-10-8.2 0-3.3 1.8-5.6 4.4-7.2"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity=".9"
      />
      <path
        d="M24 36c6 0 10-3.6 10-8.2 0-3.3-1.8-5.6-4.4-7.2"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity=".9"
      />
      <path d="M24 34V13" stroke="white" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="24" cy="10.5" r="2.6" fill="white" />
      <circle cx="15.5" cy="17" r="1.8" fill="white" opacity=".8" />
      <circle cx="32.5" cy="17" r="1.8" fill="white" opacity=".8" />
      <path d="M12 38.5h24" stroke="url(#fg2)" strokeWidth="3" strokeLinecap="round" opacity=".0" />
    </svg>
  );
}

export default function Logo({ locale, className = "", withText = true, size = 36 }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.25rem] font-extrabold tracking-tight text-ink">
            {locale === "ar" ? "فونتان" : "Fontain"}
          </span>
        </span>
      )}
    </span>
  );
}
