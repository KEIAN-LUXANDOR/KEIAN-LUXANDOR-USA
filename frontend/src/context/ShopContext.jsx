import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { loadJSON, saveJSON } from '../utils/storage';

const ShopContext = createContext(null);

const initialState = {
  cart: loadJSON('shop.cart', []), // [{ product, qty, size }]
  wishlist: loadJSON('shop.wishlist', []), // [product]
};

function reducer(state, action) {
  switch (action.type) {
    case 'cart/add': {
      const { product, qty = 1, size = null } = action;
      const key = `${product.id}|${size ?? ''}`;
      const exists = state.cart.find((i) => `${i.product.id}|${i.size ?? ''}` === key);
      const cart = exists
        ? state.cart.map((i) => (i === exists ? { ...i, qty: i.qty + qty } : i))
        : [...state.cart, { product, qty, size }];
      return { ...state, cart };
    }
    case 'cart/qty':
      return {
        ...state,
        cart: state.cart
          .map((i, idx) => (idx === action.index ? { ...i, qty: Math.max(0, action.qty) } : i))
          .filter((i) => i.qty > 0),
      };
    case 'cart/remove':
      return { ...state, cart: state.cart.filter((_, idx) => idx !== action.index) };
    case 'wishlist/toggle': {
      const has = state.wishlist.some((p) => p.id === action.product.id);
      return {
        ...state,
        wishlist: has ? state.wishlist.filter((p) => p.id !== action.product.id) : [...state.wishlist, action.product],
      };
    }
    default:
      return state;
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => saveJSON('shop.cart', state.cart), [state.cart]);
  useEffect(() => saveJSON('shop.wishlist', state.wishlist), [state.wishlist]);

  const value = useMemo(
    () => ({
      cart: state.cart,
      wishlist: state.wishlist,
      cartCount: state.cart.reduce((n, i) => n + i.qty, 0),
      cartTotal: state.cart.reduce((n, i) => n + i.qty * i.product.price, 0),
      addToCart: (product, qty, size) => dispatch({ type: 'cart/add', product, qty, size }),
      setQty: (index, qty) => dispatch({ type: 'cart/qty', index, qty }),
      removeFromCart: (index) => dispatch({ type: 'cart/remove', index }),
      toggleWishlist: (product) => dispatch({ type: 'wishlist/toggle', product }),
      isWishlisted: (id) => state.wishlist.some((p) => p.id === id),
    }),
    [state],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside <ShopProvider>');
  return ctx;
};