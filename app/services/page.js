import Link from 'next/link';
import Icon from '@/components/Icon';
import CTA from '@/components/CTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services } from '@/lib/services';

export const metadata = {
  title: 'IT, Cloud & DevOps Services',
  description:
    'Explore Architech Systems services: managed IT (MSP), system support and administration, cloud administration for AWS, Azure and Google Cloud, and DevOps engineering.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />
          <p className="eyebrow">Services</p>
          <h1>Managed IT, system support, cloud and DevOps, <span className="grad-text">all in one place.</span></h1>
          <p className="lead">Pick one service or combine them. Either way you get a single team accountable for your whole stack.</p>
        </div>
      </section>
      <section className="section-sm">
        <div className="container cards">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card">
              <div className="icon-box"><Icon name={s.icon} size={26} /></div>
              <h2 style={{ fontSize: '1.4rem' }}>{s.name}</h2>
              <p>{s.summary}</p>
              <ul className="tags">
                {s.features.map((f) => <li key={f.t}>{f.t}</li>)}
              </ul>
              <span className="card-link">View {s.short} details <Icon name="arrow" size={16} /></span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
