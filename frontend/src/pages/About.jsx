import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import Media from '../components/common/Media';
import Reveal from '../components/common/Reveal';
import './Content.css';

export default function About() {
  return (
    <>
      <PageHero title="Our Story" text="Fine jewelry made for life’s meaningful moments — and for every day in between." crumbs={[{ label: 'About Us' }]} />

      <section className="section container split" id="craft">
        <Media tone="gold" kind="ring" ratio="4 / 5" />
        <Reveal className="split__copy">
          <p className="eyebrow muted">Keian Luxandor</p>
          <h2>Designed with Intention</h2>
          <p>
            Keian Luxandor creates fine jewelry for engagements, anniversaries and the everyday. Each design starts with
            a clean line and a bright stone, and is finished by hand so it feels as good as it looks.
          </p>
          <p>Every piece is backed by our lifetime warranty and personal care from our team.</p>
          <Link to="/our-values" className="link-underline">Our Promise</Link>
        </Reveal>
      </section>

      <section className="section container split split--reverse" id="service">
        <Media tone="blush" kind="pendant" ratio="4 / 5" />
        <Reveal className="split__copy">
          <p className="eyebrow muted">Personal Service</p>
          <h2>Find Your Piece, Together</h2>
          <p>Book a one-to-one appointment with a Keian expert to compare styles, check sizing or talk through an idea.</p>
          <Link to="/contact-us" className="btn btn--outline">Contact Us</Link>
        </Reveal>
      </section>

      <section className="section container split" id="stories">
        <Media tone="silver" kind="earrings" ratio="4 / 5" />
        <Reveal className="split__copy">
          <p className="eyebrow muted">Your Moments</p>
          <h2>Made for Your Moments</h2>
          <p>From proposals to anniversaries, we love hearing the stories behind your pieces. Share yours with us.</p>
          <Link to="/contact-us" className="link-underline">Share Your Story</Link>
        </Reveal>
      </section>
    </>
  );
}