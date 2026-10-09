/** Cinta horizontal con desplazamiento lento. Se pausa al pasar el cursor. */
export default function Marquee({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  const track = [...items, ...items];

  return (
    <div className="marquee border-y border-line" aria-hidden>
      <ul className="marquee-track">
        {track.map((item, index) => (
          <li key={`${item}-${index}`} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-dot" />
          </li>
        ))}
      </ul>
    </div>
  );
}
