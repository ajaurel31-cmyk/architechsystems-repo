import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name}: Managed IT, Cloud & DevOps`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: 'linear-gradient(135deg, #0b0d17 0%, #161a3a 60%, #0d2b3a 100%)', color: '#eef0fb', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <svg width="88" height="88" viewBox="0 0 48 48">
            <defs><linearGradient id="g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7C5CFF" /><stop offset="1" stopColor="#22D3EE" /></linearGradient></defs>
            <rect width="48" height="48" rx="13" fill="url(#g)" />
            <path d="M13.5 35.5 24 13l10.5 22.5" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.6 27.6h10.8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
            <circle cx="24" cy="13" r="3.4" fill="#fff" /><circle cx="18.6" cy="27.6" r="2.3" fill="#fff" /><circle cx="29.4" cy="27.6" r="2.3" fill="#fff" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Architech</div>
            <div style={{ fontSize: 18, letterSpacing: 8, color: '#9aa1c0', marginTop: 4 }}>SYSTEMS</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>IT infrastructure,</div>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, color: '#7dd3fc' }}>engineered to just work.</div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 26, color: '#c7cbe6' }}>
          {['Managed IT', 'System Support', 'Cloud Admin', 'DevOps'].map((t) => (
            <div key={t} style={{ padding: '10px 22px', borderRadius: 999, border: '1px solid rgba(255,255,255,.2)', background: 'rgba(255,255,255,.06)' }}>{t}</div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
