import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/site";

/**
 * Redirects locale-less URLs ("/", "/services", …) to the visitor's preferred
 * locale. Localized pages are static and never pass through here.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) return NextResponse.next();

  let locale: Locale | undefined;
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isLocale(cookie)) locale = cookie;

  if (!locale) {
    const header = request.headers.get("accept-language") ?? "";
    const preferred = header.split(",")[0]?.trim().toLowerCase() ?? "";
    locale = preferred.startsWith("ar") ? "ar" : defaultLocale;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/", "/services", "/services/:path*", "/about", "/contact"],
};
