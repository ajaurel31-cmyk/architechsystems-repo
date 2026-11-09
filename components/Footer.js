import Link from 'next/link';
import Logo from './Logo';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo size={32} />
          <p className="muted footer-blurb">{site.description}</p>
        </div>
        <nav aria-label="Services">
          <h2 className="footer-h">Services</h2>
          {services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}
        </nav>
        <nav aria-label="Company">
          <h2 className="footer-h">Company</h2>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/services">All services</Link>
        </nav>
        <address>
          <h2 className="footer-h">Get in touch</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <span className="muted">{site.address.locality}, {site.address.region}</span>
        </address>
      </div>
      <div className="container footer-bottom muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
