'use client';

export default function RetryButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.location.replace('/')}
      className="btn-press mt-10 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg hover:opacity-90"
    >
      {label}
    </button>
  );
}
