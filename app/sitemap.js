import { site } from '@/lib/site';
import { services } from '@/lib/services';

export default function sitemap() {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 })),
    { url: `${site.url}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
