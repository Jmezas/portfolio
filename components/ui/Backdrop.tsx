'use client';

import { useEffect, useRef } from 'react';
import type { Theme } from '@/types';

/**
 * Fondo decorativo del hero: cuadrícula de puntos que se ilumina alrededor
 * del cursor y dos manchas de color que derivan lentamente.
 * Sin dependencias; sólo CSS y una variable actualizada con pointermove.
 */
export default function Backdrop({ variant = 'both' }: { variant?: Theme['backdrop'] }) {
  const ref = useRef<HTMLDivElement>(null);
  const dots = variant === 'dots' || variant === 'both';
  const aurora = variant === 'aurora' || variant === 'both';

  useEffect(() => {
    const element = ref.current;
    if (!element || !dots) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        element.style.setProperty('--my', `${event.clientY - rect.top}px`);
      });
    };
    const onLeave = () => {
      element.style.setProperty('--mx', '-9999px');
      element.style.setProperty('--my', '-9999px');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [dots]);

  if (variant === 'none') return null;

  return (
    <div ref={ref} aria-hidden className="backdrop">
      {aurora && (
        <>
          <span className="aurora aurora-a" />
          <span className="aurora aurora-b" />
        </>
      )}
      {dots && (
        <>
          <div className="dots" />
          <div className="dots dots-spot" />
        </>
      )}
    </div>
  );
}
