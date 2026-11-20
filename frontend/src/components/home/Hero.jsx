import { Link } from 'react-router-dom';
import { HERO } from '../../data/home';
import Media from '../common/Media';

export default function Hero() {
  return (
    <section className="hero">
      <Media className="hero__media" src={HERO.image} tone={HERO.tone} kind="bracelet" alt={HERO.title} ratio="auto" eager />
      <div className="hero__content container">
        <p className="eyebrow">{HERO.eyebrow}</p>
        <h1>{HERO.title}</h1>
        <Link to={HERO.cta.to} className="btn">{HERO.cta.label}</Link>
      </div>
    </section>
  );
}