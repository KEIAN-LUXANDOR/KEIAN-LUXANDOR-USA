import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import Media from '../components/common/Media';
import Icon from '../components/common/Icon';
import { useShop } from '../context/ShopContext';
import { useUI } from '../context/UIContext';
import { formatPrice } from '../config/site';
import './Content.css';

export default function Cart() {
  const { cart, cartTotal, setQty, removeFromCart } = useShop();
  const { showToast } = useUI();

  if (cart.length === 0) {
    return (
      <>
        <PageHero title="Shopping Bag" crumbs={[{ label: 'Bag' }]} />
        <section className="section container empty-state">
          <p className="serif">Your bag is empty.</p>
          <Link to="/collections/fine-jewelry" className="btn">Continue Shopping</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Shopping Bag" crumbs={[{ label: 'Bag' }]} />
      <section className="section container cart">
        <ul className="cart__items">
          {cart.map((item, idx) => (
            <li key={`${item.product.id}-${item.size}`} className="cart__item">
              <Link to={`/product/${item.product.id}`}><Media src={item.product.image} tone={item.product.tone} label={item.product.type} /></Link>
              <div className="cart__details">
                <Link to={`/product/${item.product.id}`} className="cart__name">{item.product.name}</Link>
                <p className="muted">{item.product.metal}{item.size ? ` · Size ${item.size}` : ''}</p>
                <div className="qty">
                  <button onClick={() => setQty(idx, item.qty - 1)} aria-label="Decrease quantity"><Icon name="minus" size={14} /></button>
                  <span>{item.qty}</span>
                  <button onClick={() => setQty(idx, item.qty + 1)} aria-label="Increase quantity"><Icon name="plus" size={14} /></button>
                </div>
              </div>
              <div className="cart__right">
                <p>{formatPrice(item.product.price * item.qty)}</p>
                <button className="link-underline" onClick={() => removeFromCart(idx)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="cart__summary">
          <h2>Order Summary</h2>
          <dl>
            <dt>Subtotal</dt><dd>{formatPrice(cartTotal)}</dd>
            <dt>Shipping</dt><dd>Complimentary</dd>
            <dt>Estimated Tax</dt><dd>Calculated at checkout</dd>
          </dl>
          <p className="cart__total"><span>Total</span><span>{formatPrice(cartTotal)}</span></p>
          {/* Connect to your checkout provider (Shopify, Stripe, Magento, etc.). */}
          <button className="btn btn--block" onClick={() => showToast('Connect your checkout provider here')}>Proceed to Checkout</button>
          <Link to="/collections/fine-jewelry" className="link-underline">Continue Shopping</Link>
        </aside>
      </section>
    </>
  );
}