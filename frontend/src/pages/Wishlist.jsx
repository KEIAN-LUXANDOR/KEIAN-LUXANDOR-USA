import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import ProductCard from '../components/common/ProductCard';
import { useShop } from '../context/ShopContext';

export default function Wishlist() {
  const { wishlist } = useShop();
  return (
    <>
      <PageHero title="Wishlist" crumbs={[{ label: 'Wishlist' }]} text={`${wishlist.length} saved ${wishlist.length === 1 ? 'piece' : 'pieces'}`} />
      <section className="section container">
        {wishlist.length === 0 ? (
          <div className="empty-state">
            <p className="serif">Your wishlist is empty.</p>
            <p className="muted">Tap the heart on any piece to save it here.</p>
            <Link to="/collections/new-arrivals" className="btn">Explore New Arrivals</Link>
          </div>
        ) : (
          <div className="grid-products">
            {wishlist.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </>
  );
}