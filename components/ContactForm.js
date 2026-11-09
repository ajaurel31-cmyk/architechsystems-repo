'use client';
import { useState } from 'react';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

// Opens the visitor's email app with the message pre-filled. No backend or
// paid form service needed. Can be swapped for a form API later.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Assessment request: ${f.get('service')} (${f.get('company') || f.get('name')})`;
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nCompany: ${f.get('company')}\nService: ${f.get('service')}\n\n${f.get('message')}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Work email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Company<input name="company" autoComplete="organization" /></label>
        <label>Service
          <select name="service" defaultValue="Free IT assessment">
            <option>Free IT assessment</option>
            {services.map((s) => <option key={s.slug}>{s.name}</option>)}
          </select>
        </label>
      </div>
      <label>How can we help?<textarea name="message" required placeholder="Tell us about your team, systems and goals." /></label>
      <button type="submit" className="btn">Send message</button>
      <p className="form-note" role="status">
        {sent ? `Your email app should now be open. If not, write to us at ${site.email}.` : 'We reply within one business day.'}
      </p>
    </form>
  );
}
