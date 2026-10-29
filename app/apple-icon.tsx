import { ImageResponse } from 'next/og';
import { site } from '@/content/site';
import { initials } from '@/lib/format';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Icono para "Añadir a pantalla de inicio" en iOS. Sin esquinas: iOS las recorta. */
export default function AppleIcon() {
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
          fontSize: 84,
          fontWeight: 600,
          letterSpacing: -3,
          fontFamily: 'serif',
        }}
      >
        {initials(site.person.name)}
      </div>
    ),
    size,
  );
}
