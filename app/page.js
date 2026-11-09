import Link from 'next/link';
import Icon from '@/components/Icon';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { services } from '@/lib/services';

export const metadata = {
  title: { absolute: 'Architech Systems | Managed IT Services, Cloud Administration & DevOps' },
  description:
    'Managed IT services, system support, cloud administration (AWS, Azure, Google Cloud) and DevOps engineering. Proactive, secure and predictable IT from Architech Systems.',
  alternates: { canonical: '/' },
};

const why = [
  { icon: 'clock', t: 'Fast response, real engineers', d: 'Talk to certified engineers, not scripts. Critical issues are picked up in minutes, not days.' },
  { icon: 'lock', t: 'Security built in', d: 'MFA, EDR, patching and backups are part of every plan, not an expensive add-on.' },
  { icon: 'chart', t: 'Predictable pricing', d: 'Flat monthly plans with no surprise invoices for routine work. Budget with confidence.' },
  { icon: 'bolt', t: 'Automation first', d: 'We script and automate everything we can, so your environment stays consistent and fast.' },
  { icon: 'users', t: 'An extension of your team', d: 'Fully managed or co-managed. We fit around your people and your existing tools.' },
  { icon: 'shield', t: 'Documented & transparent', d: 'Runbooks, diagrams and reporting you own. No lock-in, no black boxes.' },
];

const steps = [
  { t: 'Assess', d: 'A free review of your systems, security and cloud spend, with clear findings.' },
  { t: 'Plan', d: 'A prioritized roadmap with fixed scope and pricing you agree to upfront.' },
  { t: 'Onboard', d: 'We deploy monitoring, harden security and document everything.' },
  { t: 'Operate & improve', d: 'Proactive support, monthly reporting and continuous optimization.' },
];

const faqs = [
  { q: 'What services does Architech Systems provide?', a: 'We provide managed IT services (MSP), system support and administration, cloud administration for AWS, Azure and Google Cloud, and DevOps engineering including CI/CD, infrastructure as code and Kubernetes.' },
  { q: 'Who do you work with?', a: 'We support small and mid-sized businesses and engineering teams that want enterprise-grade IT and cloud operations without building a large in-house team.' },
  { q: 'Do you offer 24/7 support?', a: 'Yes. Our monitoring runs around the clock and our plans include after-hours coverage for critical incidents.' },
  { q: 'How do we get started?', a: 'Book a free assessment. We will review your environment, share our findings and recommend a plan with transparent pricing. There is no obligation.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="grid-bg" />
        <div className="container hero-grid">
          <div>
            <p className="badge"><b>MSP</b> Managed IT · Cloud · DevOps</p>
            <h1>
              IT infrastructure, <span className="grad-text">engineered</span> to just work.
            </h1>
            <p className="lead">
              Architech Systems is your proactive partner for managed IT, system support, cloud administration and DevOps.
              We keep your business secure, fast and online so you can focus on growth.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn">Get a free assessment <Icon name="arrow" size={18} /></Link>
              <Link href="/services" className="btn btn-ghost">Explore services</Link>
            </div>
            <div className="hero-trust">
              <span><Icon name="check" size={18} /> 24/7 monitoring</span>
              <span><Icon name="check" size={18} /> Flat monthly pricing</span>
              <span><Icon name="check" size={18} /> No long-term lock-in</span>
            </div>
          </div>

          <div className="console" aria-hidden="true">
            <div className="console-top">
              <div className="dots"><i /><i /><i /></div>
              <span>architech · ops dashboard</span>
              <span className="live">All systems operational</span>
            </div>
            <div className="stat-row">
              <div className="stat"><small>Uptime</small><strong>99.99%</strong></div>
              <div className="stat"><small>Open alerts</small><strong>0</strong></div>
              <div className="stat"><small>Patched</small><strong>100%</strong></div>
            </div>
            <div className="bars">
              {[40, 62, 48, 75, 58, 82, 66, 90, 72, 95, 80, 88].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
            </div>
            <div className="checks">
              <div>Backups verified <em>✓ Passed</em></div>
              <div>Endpoint protection <em>✓ Healthy</em></div>
              <div>CI/CD pipeline · deploy #482 <em>✓ Success</em></div>
            </div>
          </div>
        </div>
      </section>

      <div className="tech">
        <div className="tech-inner">
          <span>Platforms we manage</span>
          <span>Microsoft 365</span><span>Azure</span><span>AWS</span><span>Google Cloud</span><span>Linux</span><span>Kubernetes</span><span>Terraform</span>
        </div>
      </div>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Everything your infrastructure needs, under one roof.</h2>
            <p className="lead">From the help desk to the Kubernetes cluster, one accountable team that understands your whole stack.</p>
          </div>
          <div className="cards">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card">
                <div className="icon-box"><Icon name={s.icon} size={26} /></div>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
                <ul className="tags">
                  {s.features.slice(0, 3).map((f) => <li key={f.t}>{f.t}</li>)}
                </ul>
                <span className="card-link">Learn more <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container numbers">
          <div className="number"><strong className="grad-text">24/7</strong><span>Proactive monitoring</span></div>
          <div className="number"><strong className="grad-text">&lt;15 min</strong><span>Critical response target</span></div>
          <div className="number"><strong className="grad-text">99.9%</strong><span>Uptime commitment</span></div>
          <div className="number"><strong className="grad-text">1</strong><span>Accountable partner</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Why Architech</p>
            <h2>Built like an engineering team. Priced like a partner.</h2>
          </div>
          <div className="features">
            {why.map((w) => (
              <div key={w.t} className="feature">
                <div className="icon-box"><Icon name={w.icon} size={22} /></div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>A clear path from chaos to calm.</h2>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div key={s.t} className="step">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />
    </>
  );
}
