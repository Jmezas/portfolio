/** Subrayado dibujado a mano. Se "traza" al cargar. */
export default function Scribble({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 14"
      preserveAspectRatio="none"
      className={`scribble ${className}`}
      fill="none"
    >
      <path
        d="M3 9.5C34 5.2 66 3.4 98 4.1c37 .8 62 4.6 98 3.1 13-.6 26-2.4 38-4.9M12 12.3c45-4.5 92-5.6 137-3.6 25 1.1 50 1.8 75-.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
      />
    </svg>
  );
}
