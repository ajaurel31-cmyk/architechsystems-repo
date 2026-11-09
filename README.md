# Architech Systems website

Marketing site for Architech Systems: Managed IT (MSP), System Support, Cloud Administration and DevOps.
Built with Next.js (App Router). Every page is pre-rendered as static HTML for speed and SEO.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```

## Edit content
- Business details (email, phone, city, social links): `lib/site.js`
- Service pages, features and FAQs: `lib/services.js`
- Logo: `components/Logo.js` and `app/icon.svg` (`public/logo.png` is the PNG version)

## Built-in SEO
- Unique title, meta description and canonical URL on every page
- Open Graph / Twitter social preview images (`app/opengraph-image.js`)
- Structured data (JSON-LD): Organization/ProfessionalService, WebSite, Service, FAQPage, BreadcrumbList
- Auto-generated `/sitemap.xml` and `/robots.txt`
- Semantic HTML, mobile-friendly, fast static pages

## Launch checklist (free)
1. In Vercel, set `NEXT_PUBLIC_SITE_URL` to your final domain (e.g. `https://architechsystems.com`).
2. Add your domain in Google Search Console, put the verification code in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, then submit `/sitemap.xml`.
3. Create a free Google Business Profile using the same name, phone and city as `lib/site.js`.
