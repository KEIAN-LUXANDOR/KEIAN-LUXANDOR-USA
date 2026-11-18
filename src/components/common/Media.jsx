// Image with an elegant placeholder fallback.
// Pass `src` when you have real photography; otherwise a toned
// background with line-art jewelry is rendered so layouts look finished.
import './Media.css';

const ART = {
  ring: (
    <>
      <ellipse cx="50" cy="60" rx="22" ry="24" />
      <ellipse cx="50" cy="60" rx="17" ry="19" />
      <path d="M42 36h16l5 6-13 10-13-10 5-6Z" />
      <path d="M37 42h26M50 52l-4-10 4-6 4 6-4 10" />
    </>
  ),
  earrings: (
    <>
      <circle cx="35" cy="28" r="3" />
      <path d="M35 31v6M35 37l-8 14 8 16 8-16-8-14Z" />
      <circle cx="65" cy="28" r="3" />
      <path d="M65 31v6M65 37l-8 14 8 16 8-16-8-14Z" />
    </>
  ),
  necklace: (
    <>
      <path d="M20 20c2 30 16 46 30 46s28-16 30-46" />
      <path d="M50 66v4M44 70h12l-6 14-6-14Z" />
    </>
  ),
  bracelet: (
    <>
      <ellipse cx="50" cy="52" rx="30" ry="18" />
      {Array.from({ length: 10 }, (_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return <circle key={i} cx={50 + 30 * Math.cos(a)} cy={52 + 18 * Math.sin(a)} r="3.2" />;
      })}
    </>
  ),
  pendant: (
    <>
      <path d="M50 14v18" />
      <circle cx="50" cy="35" r="3" />
      <path d="M50 38c-12 8-14 22-6 30 3 3 9 3 12 0 8-8 6-22-6-30Z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M50 22c2 16 8 22 24 24-16 2-22 8-24 24-2-16-8-22-24-24 16-2 22-8 24-24Z" />
      <path d="M74 66c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9Z" />
    </>
  ),
};

const kindFor = (label = '') => {
  const t = label.toLowerCase();
  if (t.includes('earring') || t.includes('stud') || t.includes('hoop') || t.includes('cuff')) return 'earrings';
  if (t.includes('necklace')) return 'necklace';
  if (t.includes('pendant') || t.includes('medallion')) return 'pendant';
  if (t.includes('bracelet') || t.includes('bangle') || t.includes('anklet')) return 'bracelet';
  if (t.includes('ring') || t.includes('band')) return 'ring';
  return 'sparkle';
};

export default function Media({ src, alt = '', tone = 'cream', kind, label, ratio = '1 / 1', className = '', eager = false }) {
  const art = ART[kind || kindFor(label || alt)];
  return (
    <div className={`media media--${tone} ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding={eager ? 'sync' : 'async'} />
      ) : (
        <svg className="media__art" viewBox="0 0 100 100" role="img" aria-label={alt || label || 'Jewelry'}>
          {art}
        </svg>
      )}
    </div>
  );
}