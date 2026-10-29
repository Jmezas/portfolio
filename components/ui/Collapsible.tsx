'use client';

import { useId, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleProps {
  show: string;
  hide: string;
  className?: string;
  children: ReactNode;
}

/** Contenido plegado en móvil con un botón para abrirlo. En pantallas medianas siempre visible. */
export default function Collapsible({ show, hide, className = '', children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={id}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent md:hidden"
      >
        {open ? hide : show}
        <ChevronDown size={15} strokeWidth={1.75} aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div id={id} className={`${open ? 'block' : 'hidden'} md:block ${className}`}>
        {children}
      </div>
    </>
  );
}
