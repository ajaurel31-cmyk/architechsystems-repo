import Icon from '@/components/Icon';
import CTA from '@/components/CTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About Us',
  description:
    'Architech Systems is a team of systems, cloud and DevOps engineers delivering managed IT services built on automation, security and transparency.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about' },
};

const values = [
  { icon: 'shield', t: 'Ownership', d: 'We treat your environment like our own and see every issue through to the root cause.' },
  { icon: 'bolt', t: 'Automation', d: 'If we do something twice, we automate it. That means fewer mistakes and faster service.' },
  { icon: 'users', t: 'Clarity', d: 'Plain-English communication, honest recommendations and documentation you keep.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'About', path: '/about' }]} />
          <p className="eyebrow">About us</p>
          <h1>We architect technology that <span className="grad-text">lets businesses move faster.</span></h1>
        </div>
      </section>
      <section className="section-sm">
        <div className="container split">
          <div className="prose">
            <p>
              {site.name} was founded on a simple idea: businesses of every size deserve the same reliable, secure and
              well-engineered infrastructure that large enterprises take for granted.
            </p>
            <p>
              Our team brings together experienced system administrators, cloud architects and DevOps engineers. We combine
              the dependable day-to-day support of a managed service provider with the modern engineering practices of a
              DevOps team: infrastructure as code, automation and continuous improvement.
            </p>
            <p>
              Whether you need someone to handle the help desk, take over your servers, tame your cloud bill or build your
              deployment pipeline, we become the accountable partner behind your technology.
            </p>
          </div>
          <div className="panel">
            <blockquote>
              &ldquo;Our goal is simple: your technology should be the most reliable part of your business, not the thing that keeps you up at night.&rdquo;
            </blockquote>
            <cite>The Architech Systems team</cite>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our values</p>
            <h2>How we work</h2>
          </div>
          <div className="features">
            {values.map((v) => (
              <div key={v.t} className="feature">
                <div className="icon-box"><Icon name={v.icon} size={22} /></div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
