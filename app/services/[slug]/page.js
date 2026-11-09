import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services, getService } from '@/lib/services';
import { site, absoluteUrl } from '@/lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${s.title} | ${site.name}`, description: s.metaDescription },
    twitter: { title: `${s.title} | ${site.name}`, description: s.metaDescription },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);
  const path = `/services/${s.slug}`;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: s.short, path }]} />
          <div className="icon-box"><Icon name={s.icon} size={26} /></div>
          <h1>{s.title}</h1>
          <p className="lead">{s.intro}</p>
          <ul className="outcomes">
            {s.outcomes.map((o) => <li key={o}><Icon name="check" size={16} /> {o}</li>)}
          </ul>
          <div className="btn-row" style={{ marginTop: 34 }}>
            <Link href="/contact" className="btn">Talk to an engineer <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What&apos;s included</p>
            <h2>{s.name} capabilities</h2>
          </div>
          <div className="features">
            {s.features.map((f) => (
              <div key={f.t} className="feature">
                <div className="icon-box"><Icon name="check" size={20} /></div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">FAQ</p>
            <h2>{s.short} questions, answered</h2>
          </div>
          <div className="faq">
            {s.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Related services</p>
            <h2>Pairs well with</h2>
          </div>
          <div className="features">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card">
                <div className="icon-box"><Icon name={o.icon} size={22} /></div>
                <h3>{o.name}</h3>
                <span className="card-link">Learn more <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: s.name,
              serviceType: s.name,
              description: s.metaDescription,
              url: absoluteUrl(path),
              provider: { '@id': `${site.url}/#organization` },
              areaServed: site.areaServed,
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: s.name,
                itemListElement: s.features.map((f) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: f.t, description: f.d } })),
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
            },
          ],
        }}
      />
    </>
  );
}
