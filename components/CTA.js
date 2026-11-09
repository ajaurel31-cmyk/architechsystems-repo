import Link from 'next/link';

export default function CTA({ title = 'Ready for IT that just works?', text = 'Book a free, no-obligation IT and cloud assessment. We will review your environment and send you a clear, prioritized action plan.' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link href="/contact" className="btn btn-light">Get your free assessment</Link>
        </div>
      </div>
    </section>
  );
}
