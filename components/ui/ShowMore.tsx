'use client';

import { Children, cloneElement, isValidElement, useState, type ReactElement, type ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreProps {
  as?: 'ul' | 'ol';
  className?: string;
  /** Elementos visibles sin desplegar en pantallas pequeñas. */
  initial: number;
  /** Clase de visualización del elemento en pantallas medianas, por ejemplo "md:block". */
  mdDisplay: string;
  showMore: string;
  showLess: string;
  children: ReactNode;
}

/**
 * Lista que en móvil muestra solo los primeros elementos y un botón para ver el resto.
 * En pantallas medianas o grandes siempre se ven todos.
 */
export default function ShowMore({ as: Tag = 'ul', className = '', initial, mdDisplay, showMore, showLess, children }: ShowMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<{ className?: string }>[];
  const hidden = items.length - initial;
  if (hidden <= 0) return <Tag className={className}>{items}</Tag>;

  return (
    <>
      <Tag className={className}>
        {items.map((child, index) =>
          index < initial || expanded
            ? child
            : cloneElement(child, { className: `${child.props.className ?? ''} hidden ${mdDisplay}`.trim() }),
        )}
      </Tag>
      <div className="mt-6 flex justify-center md:hidden">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="btn-press inline-flex items-center gap-2 rounded-full border border-line bg-elev px-5 py-2.5 text-sm font-medium"
        >
          {expanded ? showLess : showMore.replace('{n}', String(hidden))}
          {expanded ? <ChevronUp size={16} strokeWidth={1.75} aria-hidden /> : <ChevronDown size={16} strokeWidth={1.75} aria-hidden />}
        </button>
      </div>
    </>
  );
}
