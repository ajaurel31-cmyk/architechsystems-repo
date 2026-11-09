import Link from 'next/link';
import Logo from './Logo';
import { services } from '@/lib/services';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="Architech Systems home"><Logo /></Link>
        <nav aria-label="Main" className="nav">
          <details className="nav-drop">
            <summary>Services</summary>
            <div className="drop-panel">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>
              ))}
              <Link href="/services" className="drop-all">All services →</Link>
            </div>
          </details>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact" className="btn btn-sm">Get a free assessment</Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open menu"><span /><span /><span /></summary>
          <div className="mobile-panel">
            <Link href="/services">Services</Link>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="sub">{s.short}</Link>
            ))}
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="btn">Get a free assessment</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
