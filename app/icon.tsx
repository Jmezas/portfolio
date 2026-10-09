import { ImageResponse } from 'next/og';
import { site } from '@/content/site';
import { initials } from '@/lib/format';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: site.theme.accent,
          color: '#fff',
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: -1,
          borderRadius: 14,
          fontFamily: 'serif',
        }}
      >
        {initials(site.person.name)}
      </div>
    ),
    size,
  );
}
