import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  srHint?: string;
  icon?: boolean;
}

export default function ExternalLink({ href, children, srHint, icon = true, className = '', ...rest }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 ${className}`}
      {...rest}
    >
      {children}
      {icon && <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />}
      {srHint && <span className="sr-only"> ({srHint})</span>}
    </a>
  );
}
