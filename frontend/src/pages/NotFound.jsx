import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section container empty-state">
      <p className="eyebrow muted">404</p>
      <p className="serif">We couldn’t find that page.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
}