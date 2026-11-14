# Fontain — Website

Bilingual (English / Arabic, full RTL) marketing website for **Fontain**, a digital marketing, creative and software studio based in Doha, Qatar.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript. All pages are statically generated; every animation is CSS-driven with two tiny client helpers (scroll reveal and counters), so the site stays very light and fast.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /en or /ar
npm run build      # production build
npm start          # serve the production build
```

## Structure

```text
app/
  [locale]/            en | ar — root layout sets <html lang dir> and fonts
    page.tsx           Home
    services/          Services index + one page per service
    about/             About
    contact/           Contact form + details
  api/contact/         Form handler (Resend email or console log)
  sitemap.ts robots.ts icon.svg
components/            UI sections (Hero, ServicesGrid, WhyUs, Stats, Process, …)
lib/
  site.ts              ★ Company details, contact info, social links, locales
  services.ts          ★ The 10 services (bilingual copy, features, steps, tools)
  i18n/en.ts ar.ts     ★ All UI copy per language
proxy.ts               Redirects "/" to the visitor's language (cookie → Accept-Language)
```

## Things to update before launch

| What | Where |
| --- | --- |
| Logo / brand files | Already in place: `public/logo.png` (circular mark), `app/icon.png`, `app/apple-icon.png`, `app/[locale]/opengraph-image.png`. Masters live in `public/brand/` (logo, two banners, identity sheet) and web-optimised banners in `public/images/`. Palette tokens are in `app/globals.css` (`@theme`). |
| Email, phone, WhatsApp number, address, social links, domain | `lib/site.ts` |
| Stats figures and sample testimonials | `lib/i18n/en.ts` and `lib/i18n/ar.ts` (look for `TODO`) |
| Contact form email delivery | Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` + `CONTACT_TO_EMAIL` |
| Public URL | `NEXT_PUBLIC_SITE_URL` env var (used for canonical URLs, sitemap, Open Graph) |

## Deployment

The repo includes `amplify.yml` for AWS Amplify Hosting (Next.js SSR). Set the environment variables above in the Amplify console. The site also deploys unchanged to Vercel or any Node host (`npm run build && npm start`).

## Performance notes

- All pages are static (SSG). Lighthouse on the production build: Performance 95–96 (mobile) / 100 (desktop), Accessibility, Best Practices and SEO 100, CLS ≈ 0.
- The stylesheet (~11 KB gzipped) is inlined via `experimental.inlineCss` in `next.config.ts` to remove a render-blocking request. If a future Next.js upgrade drops the flag, simply remove it.
- Scroll-reveal animations run from a ~400-byte inline script (`lib/reveal-script.ts`) before React hydrates, so content never waits for the JS bundle; `components/Reveal.tsx` covers client-side navigations.
- Fonts: Manrope (Latin) and Alexandria (Arabic) via `next/font`, both preloaded, with metric-matched fallbacks.

## Adding a service

Add one object to `lib/services.ts`. The home grid, services page, detail page, footer, sitemap and contact-form dropdown all update automatically in both languages.
