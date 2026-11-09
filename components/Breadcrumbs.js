import Link from 'next/link';
import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/site';

export default function Breadcrumbs({ items }) {
  const all = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          {all.map((c, i) => (
            <li key={c.path}>
              {i < all.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
        }}
      />
    </>
  );
}
