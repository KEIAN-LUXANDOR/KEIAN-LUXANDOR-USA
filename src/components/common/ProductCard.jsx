import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { useUI } from '../../context/UIContext';
import { formatPrice } from '../../config/site';
import Media from './Media';
import Icon from './Icon';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted, addToCart } = useShop();
  const { showToast } = useUI();
  const saved = isWishlisted(product.id);

  return (
    <article className="pcard">
      <div className="pcard__media">
        <Link to={`/product/${product.id}`} aria-label={product.name} tabIndex={-1}>
                    <Media src={product.image} tone={product.tone} label={product.type} alt={product.name} ratio="4 / 5" />
        </Link>
        {product.badge && <span className="pcard__badge">{product.badge}</span>}
        <button
          className={`pcard__wish ${saved ? 'is-saved' : ''}`}
          aria-pressed={saved}
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => {
            toggleWishlist(product);
            showToast(saved ? 'Removed from wishlist' : 'Added to wishlist');
          }}
        >
          <Icon name="heart" size={18} filled={saved} />
        </button>
        <button
          className="pcard__quick"
          onClick={() => {
            addToCart(product, 1);
            showToast('Added to bag');
          }}
        >
          Add to Bag
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="pcard__info">
        <h3 className="pcard__name">{product.name}</h3>
        <p className="pcard__price">{formatPrice(product.price)}</p>
      </Link>
    </article>
  );
}