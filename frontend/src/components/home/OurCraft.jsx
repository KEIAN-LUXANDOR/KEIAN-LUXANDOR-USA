import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CRAFT } from '../../data/home';
import Reveal from '../common/Reveal';

// "Our Craft" section: photo in a soft arch shape beside the text.
// The video only starts loading when the section is about to come on screen,
// so it does not slow down the top of the page.
function CraftVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    v.muted = true;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!v.src) v.src = CRAFT.video;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, { rootMargin: '300px' });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      poster={CRAFT.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label="Keian Luxandor diamond ring turning"
    />
  );
}

export default function OurCraft() {
  return (
    <section className="craft">
      <div className="craft__arch">
        {CRAFT.video ? <CraftVideo /> : <img src={CRAFT.image} alt={CRAFT.title.join(' ')} loading="lazy" />}
      </div>
      <Reveal className="craft__copy">
        <span className="craft__eyebrow">{CRAFT.eyebrow}</span>
        <h2>{CRAFT.title[0]}<br />{CRAFT.title[1]}</h2>
        <span className="craft__divider" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20M9 3 7 9l5 12 5-12-2-6" /></svg>
        </span>
        <p>{CRAFT.text}</p>
        <Link to={CRAFT.cta.to} className="craft__btn">{CRAFT.cta.label}</Link>
      </Reveal>
    </section>
  );
}
