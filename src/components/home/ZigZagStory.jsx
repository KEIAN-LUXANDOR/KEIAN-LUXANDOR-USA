import { Link } from 'react-router-dom';
import { STORIES } from '../../data/home';
import Reveal from '../common/Reveal';

// Zig-zag story: photo and ivory text panel side by side, alternating sides.
export default function ZigZagStory() {
  return (
    <section className="zigzag">
      {STORIES.map((s, i) => (
        <div key={s.title} className={`zigzag__row ${i % 2 ? 'is-reversed' : ''}`}>
          <Reveal className="zigzag__copy">
            <span className="zigzag__eyebrow">{s.eyebrow}</span>
            <h2>{s.title}</h2>
            <span className="zigzag__divider" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20M9 3 7 9l5 12 5-12-2-6" /></svg>
            </span>
            <p>{s.text}</p>
            <Link to={s.cta.to} className="zigzag__link">{s.cta.label}</Link>
          </Reveal>
          <div className="zigzag__media">
            <img src={s.image} alt={s.title} loading="lazy" />
          </div>
        </div>
      ))}
    </section>
  );
}
