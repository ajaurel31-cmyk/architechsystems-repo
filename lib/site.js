// Central business details. Every page, the structured data (JSON-LD),
// the sitemap and the social preview images read from here, so update
// these values once and the whole site stays consistent for Google.
export const site = {
  name: 'Architech Systems',
  shortName: 'Architech',
  tagline: 'Managed IT, Cloud & DevOps',
  description:
    'Architech Systems is a managed service provider (MSP) delivering proactive IT support, system administration, cloud administration and DevOps engineering for growing businesses.',
  // Set NEXT_PUBLIC_SITE_URL in Vercel once your domain is connected.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://architechsystems.com').replace(/\/$/, ''),
  // TODO: replace with your real contact details.
  email: 'hello@architechsystems.com',
  phone: '+1-555-010-2024',
  phoneDisplay: '(555) 010-2024',
  address: {
    locality: 'Your City',
    region: 'ST',
    country: 'US',
  },
  areaServed: 'United States',
  hours: 'Mo-Fr 08:00-18:00',
  founded: '2024',
  social: {
    linkedin: '',
    github: '',
  },
  keywords: [
    'managed service provider',
    'MSP',
    'managed IT services',
    'IT support',
    'system administration',
    'cloud administration',
    'AWS',
    'Azure',
    'Microsoft 365',
    'DevOps consulting',
    'CI/CD',
    'Kubernetes',
    'infrastructure as code',
    'small business IT',
  ],
};

export const absoluteUrl = (path = '/') => `${site.url}${path === '/' ? '' : path}`;
