import Icon from '@/components/Icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Contact Us | Free IT & Cloud Assessment',
  description:
    'Contact Architech Systems for managed IT, system support, cloud administration or DevOps. Book a free, no-obligation IT and cloud assessment.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
};

export default function Contact() {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
        <div className="contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Let&apos;s talk about <span className="grad-text">your infrastructure.</span></h1>
            <p className="lead">Book a free assessment or ask us anything. A real engineer will get back to you within one business day.</p>
            <div className="contact-list">
              <a className="contact-item" href={`mailto:${site.email}`}>
                <span className="icon-box"><Icon name="mail" size={20} /></span>
                <span><small>Email</small>{site.email}</span>
              </a>
              <a className="contact-item" href={`tel:${site.phone}`}>
                <span className="icon-box"><Icon name="phone" size={20} /></span>
                <span><small>Phone</small>{site.phoneDisplay}</span>
              </a>
              <div className="contact-item">
                <span className="icon-box"><Icon name="pin" size={20} /></span>
                <span><small>Location</small>{site.address.locality}, {site.address.region} · Serving clients remotely nationwide</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
