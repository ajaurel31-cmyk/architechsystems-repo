import Link from 'next/link';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-hero" style={{ textAlign: 'center', padding: '120px 0' }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page went offline.</h1>
        <p className="lead" style={{ margin: '0 auto 30px' }}>The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="btn">Back to home</Link>
      </div>
    </section>
  );
}
