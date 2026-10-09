'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface RobotProps {
  messages: string[];
  label: string;
}

/**
 * Mascota dibujada a mano en SVG. Los ojos siguen el cursor, parpadea sola,
 * saluda con el brazo al pasar el mouse y cambia de frase al hacer clic.
 */
export default function Robot({ messages, label }: RobotProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [eyes, setEyes] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);
  const [jumping, setJumping] = useState(false);
  const [talking, setTalking] = useState(false);

  // Ojos siguen el cursor en toda la página.
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const rect = svg.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height * 0.3;
        const dx = event.clientX - cx;
        const dy = event.clientY - cy;
        const distance = Math.hypot(dx, dy) || 1;
        const reach = Math.min(distance / 60, 1) * 5;
        setEyes({ x: (dx / distance) * reach, y: (dy / distance) * reach });
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  // Cambia de frase sola cada pocos segundos.
  useEffect(() => {
    if (messages.length < 2) return;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % messages.length), 5200);
    return () => window.clearInterval(id);
  }, [messages.length]);

  // Boca animada un instante cada vez que cambia la frase.
  useEffect(() => {
    setTalking(true);
    const id = window.setTimeout(() => setTalking(false), 900);
    return () => window.clearTimeout(id);
  }, [index]);

  const next = useCallback(() => {
    setIndex((value) => (value + 1) % messages.length);
    setJumping(true);
    window.setTimeout(() => setJumping(false), 650);
  }, [messages.length]);

  return (
    <div className="robot-wrap">
      <div className="robot-bubble" aria-live="polite">
        <p key={index} className="robot-bubble-text">
          {messages[index]}
        </p>
      </div>

      <button type="button" onClick={next} aria-label={label} className={`robot ${jumping ? 'is-jumping' : ''} ${talking ? 'is-talking' : ''}`}>
        <svg ref={svgRef} viewBox="0 0 200 224" width="220" height="246" fill="none" aria-hidden>
          {/* sombra */}
          <ellipse className="robot-shadow" cx="100" cy="216" rx="46" ry="5" fill="currentColor" opacity="0.12" />

          {/* antena */}
          <line x1="100" y1="14" x2="100" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle className="robot-antenna" cx="100" cy="11" r="6" fill="var(--accent)" />

          {/* orejas */}
          <rect x="40" y="58" width="12" height="26" rx="5" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />
          <rect x="148" y="58" width="12" height="26" rx="5" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />

          {/* cabeza */}
          <rect x="50" y="32" width="100" height="80" rx="20" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />
          <rect x="62" y="46" width="76" height="52" rx="12" fill="var(--bg)" stroke="currentColor" strokeWidth="2" />

          {/* ojos */}
          <g className="robot-eyes" style={{ transform: `translate(${eyes.x}px, ${eyes.y}px)` }}>
            <circle cx="85" cy="69" r="7" fill="currentColor" />
            <circle cx="115" cy="69" r="7" fill="currentColor" />
            <circle cx="87.5" cy="66.5" r="2.2" fill="var(--bg)" />
            <circle cx="117.5" cy="66.5" r="2.2" fill="var(--bg)" />
          </g>

          {/* boca */}
          <path className="robot-mouth robot-mouth-flat" d="M90 86 h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path className="robot-mouth robot-mouth-smile" d="M88 84 q12 9 24 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse className="robot-mouth robot-mouth-talk" cx="100" cy="86" rx="7" ry="4.5" fill="currentColor" />

          {/* cuello */}
          <rect x="91" y="112" width="18" height="10" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />

          {/* brazos */}
          <rect className="robot-arm-l" x="28" y="130" width="18" height="48" rx="9" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />
          <rect className="robot-arm-r" x="154" y="130" width="18" height="48" rx="9" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />

          {/* cuerpo */}
          <rect x="52" y="122" width="96" height="72" rx="18" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />
          <rect x="70" y="138" width="60" height="30" rx="8" fill="var(--bg)" stroke="currentColor" strokeWidth="2" />
          <circle className="robot-led" cx="84" cy="153" r="5" fill="var(--accent)" />
          <rect x="96" y="148" width="26" height="3" rx="1.5" fill="currentColor" opacity="0.35" />
          <rect x="96" y="156" width="18" height="3" rx="1.5" fill="currentColor" opacity="0.35" />

          {/* ruedas */}
          <circle cx="80" cy="203" r="10" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="120" cy="203" r="10" fill="var(--elev)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="80" cy="203" r="3" fill="currentColor" />
          <circle cx="120" cy="203" r="3" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
