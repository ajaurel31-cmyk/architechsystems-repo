import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Managed IT Services, Cloud Administration & DevOps`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: site.name,
    title: `${site.name} | Managed IT, Cloud & DevOps`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Managed IT, Cloud & DevOps`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Paste your Google Search Console verification code into Vercel as
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (no code change needed).
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport = {
  themeColor: '#0B0D17',
  width: 'device-width',
  initialScale: 1,
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      foundingDate: site.founded,
      priceRange: '$$',
      openingHours: site.hours,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: site.areaServed,
      sameAs: Object.values(site.social).filter(Boolean),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT, Cloud and DevOps Services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name, url: `${site.url}/services/${s.slug}` },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
