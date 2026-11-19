import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Other pages load only when someone opens them (keeps the home page fast).
const Category = lazy(() => import('./pages/Category'));
const Product = lazy(() => import('./pages/Product'));
const About = lazy(() => import('./pages/About'));
const Values = lazy(() => import('./pages/Values'));
const Contact = lazy(() => import('./pages/Contact'));
const StoreLocator = lazy(() => import('./pages/StoreLocator'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Cart = lazy(() => import('./pages/Cart'));
const Search = lazy(() => import('./pages/Search'));
const InfoPage = lazy(() => import('./pages/InfoPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections/:slug" element={<Category />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="about-us" element={<About />} />
        <Route path="our-values" element={<Values />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="store-locator" element={<StoreLocator />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search" element={<Search />} />
        <Route path="guides/:topic" element={<InfoPage />} />
        <Route path="shop-with-confidence" element={<InfoPage topic="shop-with-confidence" />} />
        <Route path="accessibility" element={<InfoPage topic="accessibility" />} />
        <Route path="privacy-policy" element={<InfoPage topic="privacy-policy" />} />
        <Route path="sitemap" element={<InfoPage topic="sitemap" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}