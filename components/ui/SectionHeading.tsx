import Reveal from '@/components/ui/Reveal';

interface SectionHeadingProps {
  number: string;
  title: string;
  intro?: string;
}

export default function SectionHeading({ number, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 border-t border-line pt-6 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="eyebrow">{number}</span>
        <h2 className="font-serif text-4xl leading-none tracking-tight md:text-5xl">{title}</h2>
      </div>
      {intro && <p className="mt-4 max-w-prose text-base text-muted md:text-lg">{intro}</p>}
    </Reveal>
  );
}
