import { useId } from 'react';

// The Architech mark: an "A" drawn as an architectural peak whose apex and
// crossbar are network nodes, joining "architecture" and "technology".
export function LogoMark({ size = 36, title }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" />
          <stop offset=".55" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#g${id})`} />
      <rect width="48" height="48" rx="13" fill={`url(#s${id})`} />
      <path d="M13.5 35.5 24 13l10.5 22.5" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6 27.6h10.8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" opacity=".9" />
      <circle cx="24" cy="13" r="3.4" fill="#fff" />
      <circle cx="18.6" cy="27.6" r="2.3" fill="#fff" />
      <circle cx="29.4" cy="27.6" r="2.3" fill="#fff" />
    </svg>
  );
}

export default function Logo({ size = 36 }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-text">
        <span className="logo-name">Architech</span>
        <span className="logo-sub">Systems</span>
      </span>
    </span>
  );
}
