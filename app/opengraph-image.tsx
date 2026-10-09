import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = site.person.name;

export default function OpenGraphImage() {
  const host = site.meta.url.replace(/^https?:\/\//, '');
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#f6f4ef',
          color: '#191816',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, color: '#6b675f', letterSpacing: 4 }}>
          {host.toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 88, lineHeight: 1, letterSpacing: -2 }}>{site.person.name}</div>
          <div style={{ fontSize: 34, color: '#6b675f', fontFamily: 'sans-serif' }}>{site.person.role}</div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 24,
            color: '#6b675f',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ width: 48, height: 2, background: site.theme.accent }} />
          {site.person.location}
        </div>
      </div>
    ),
    size,
  );
}
