import { ImageResponse } from 'next/og';
import { site } from '@/content/site';
import { initials } from '@/lib/format';

export const contentType = 'image/png';

const SIZES: Record<string, number> = { '64': 64, '192': 192, '512': 512, maskable: 512 };

export function generateImageMetadata() {
  return Object.entries(SIZES).map(([id, size]) => ({
    id,
    contentType,
    size: { width: size, height: size },
  }));
}

/** Icono generado a partir de las iniciales y el color de acento. */
export default function Icon({ id }: { id: string }) {
  const size = SIZES[id] ?? 64;
  const maskable = id === 'maskable';
  // Zona segura de los iconos maskable: el contenido va dentro del 80% central.
  const fontSize = Math.round(size * (maskable ? 0.36 : 0.47));
  const radius = maskable ? 0 : Math.round(size * 0.22);

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
          fontSize,
          fontWeight: 600,
          letterSpacing: -fontSize * 0.04,
          borderRadius: radius,
          fontFamily: 'serif',
        }}
      >
        {initials(site.person.name)}
      </div>
    ),
    { width: size, height: size },
  );
}
