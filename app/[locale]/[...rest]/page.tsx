import { notFound } from "next/navigation";

/** Catch-all for unknown paths inside a locale, so the localized 404 page is used. */
export default function CatchAll() {
  notFound();
}
