import NotFoundContent from "@/components/NotFoundContent";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-20">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <NotFoundContent texts={{ en: en.notFound, ar: ar.notFound }} />
    </section>
  );
}
