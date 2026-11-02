import { Link } from 'react-router-dom';
import { BRIDAL } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

// The banner photo already carries its own offer text, so nothing is placed
// on top of it. The heading and buttons sit in a clean band underneath.
export default function BridalBanner() {
  return (
    <section className="bridal">
      <Media className="bridal__media" src={BRIDAL.image} tone={BRIDAL.tone} kind="ring" alt={BRIDAL.title} ratio="12 / 5" />
      <Reveal className="bridal__copy">
        <h2>{BRIDAL.title}</h2>
        <p>{BRIDAL.text}</p>
        <div className="bridal__ctas">
          {BRIDAL.ctas.map((c, i) => (
            <Link key={c.to} to={c.to} className={`btn ${i > 0 ? 'btn--outline' : ''}`}>{c.label}</Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
