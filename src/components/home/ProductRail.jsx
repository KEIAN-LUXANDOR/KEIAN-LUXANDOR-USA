import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../api/products';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../common/ProductCard';
import Icon from '../common/Icon';
import Reveal from '../common/Reveal';

// Each tab shows products that have this tag in the database.
const TABS = [
  { label: 'New Arrivals', slug: 'new-arrivals' },
  { label: 'Best Sellers', slug: 'award-winners' },
  { label: 'Bridal', slug: 'engagement-rings' },
];

// Tabbed, horizontally scrollable product carousel.
export default function ProductRail() {
  const [tab, setTab] = useState(TABS[0]);
  const trackRef = useRef(null);
  const { data, loading, error } = useFetch(() => fetchProducts(tab.slug), tab.slug);
  const products = (data || []).slice(0, 10);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="section rail">
      <div className="container">
        <Reveal className="section-head">
          <h2>Discover the Collection</h2>
          <div className="rail__tabs" role="tablist">
            {TABS.map((t) => (
              <button key={t.slug} role="tab" aria-selected={t.slug === tab.slug} className={t.slug === tab.slug ? 'is-active' : ''} onClick={() => setTab(t)}>
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {loading && <p className="muted" style={{ textAlign: 'center' }}>Loading…</p>}
        {error && <p className="muted" style={{ textAlign: 'center' }}>Products are unavailable right now.</p>}
        {!loading && !error && products.length === 0 && (
          <p className="muted" style={{ textAlign: 'center' }}>No products in this tab yet.</p>
        )}

        {products.length > 0 && (
          <div className="rail__wrap">
            <button className="rail__arrow rail__arrow--prev" onClick={() => scroll(-1)} aria-label="Previous products">
              <Icon name="chevronLeft" />
            </button>
            <div className="rail__track" ref={trackRef}>
              {products.map((p) => (
                <div className="rail__slide" key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
            <button className="rail__arrow rail__arrow--next" onClick={() => scroll(1)} aria-label="Next products">
              <Icon name="chevronRight" />
            </button>
          </div>
        )}

        <div className="rail__more">
          <Link to={`/collections/${tab.slug}`} className="btn btn--outline">Shop {tab.label}</Link>
        </div>
      </div>
    </section>
  );
}