import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import ProductCard from '../components/common/ProductCard';
import { searchCollections, searchProducts } from '../utils/search';

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const products = useMemo(() => searchProducts(q, 48), [q]);
  const collections = useMemo(() => searchCollections(q, 8), [q]);

  return (
    <>
      <PageHero title={`Results for “${q}”`} text={`${products.length} products found`} crumbs={[{ label: 'Search' }]} />
      <section className="section container">
        {collections.length > 0 && (
          <div className="search-chips">
            {collections.map((c) => (
              <Link key={c.to} to={c.to} className="search-ov__chip">{c.label}</Link>
            ))}
          </div>
        )}
        {products.length === 0 ? (
          <div className="empty-state">
            <p className="serif">Nothing matched your search.</p>
            <Link to="/collections/fine-jewelry" className="btn">Browse All Jewelry</Link>
          </div>
        ) : (
          <div className="grid-products">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </>
  );
}