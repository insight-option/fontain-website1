import { site, type Locale } from "@/lib/site";
import { services } from "@/lib/services";

export default function JsonLd({ locale }: { locale: Locale }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;
  const name = locale === "ar" ? site.nameAr : site.name;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${baseUrl}/#organization`,
        name,
        alternateName: locale === "ar" ? site.name : site.nameAr,
        url: `${baseUrl}/${locale}`,
        logo: `${baseUrl}/icon.svg`,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Doha",
          addressCountry: "QA",
        },
        areaServed: ["QA", "AE", "SA", "KW", "BH", "OM"],
        sameAs: Object.values(site.social),
        knowsLanguage: ["en", "ar"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "ar" ? "خدمات فونتان" : "Fontain services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title[locale],
              description: s.short[locale],
              url: `${baseUrl}/${locale}/services/${s.slug}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/${locale}`,
        name,
        inLanguage: locale,
        publisher: { "@id": `${baseUrl}/#organization` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
