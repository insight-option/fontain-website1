import Image from "next/image";
import type { Locale } from "@/lib/site";

type Props = {
  locale: Locale;
  className?: string;
  /** Show the wordmark next to the mark */
  withText?: boolean;
  size?: number;
  /** Render the wordmark in white (for dark backgrounds) */
  inverse?: boolean;
  priority?: boolean;
};

/** Official Fontain mark (public/logo.png — circular, transparent outside the ring). */
export function LogoMark({ size = 40, className = "", priority = false }: { size?: number; className?: string; priority?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full ${className}`}
      sizes={`${size * 2}px`}
    />
  );
}

export default function Logo({ locale, className = "", withText = true, size = 40, inverse = false, priority = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} priority={priority} />
      {withText && (
        <span className={`text-[1.3rem] font-extrabold leading-none tracking-tight ${inverse ? "text-white" : "text-ink"}`}>
          {locale === "ar" ? "فونتان" : "Fontain"}
        </span>
      )}
    </span>
  );
}
