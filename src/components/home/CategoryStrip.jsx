import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

export default function CategoryStrip() {
  return (
    <section className="section categories">
      <div className="container">
        <Reveal className="section-head">
          <h2>Shop by Category</h2>
        </Reveal>
        <Reveal as="ul" className="categories__list">
          {CATEGORIES.map((c) => (
            <li key={c.label}>
              <Link to={c.to} className="categories__item">
                <Media tone={c.tone} label={c.label} ratio="6 / 7" src={c.image} />
                <span className="categories__label">{c.label}</span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
