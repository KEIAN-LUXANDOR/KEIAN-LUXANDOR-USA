import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_MENUS, UTILITY_LINKS } from '../../data/navigation';
import { useShop } from '../../context/ShopContext';
import { useUI } from '../../context/UIContext';
import useEscapeKey from '../../hooks/useEscapeKey';
import Icon from '../common/Icon';
import Logo from '../common/Logo';
import MegaMenu from './MegaMenu';
import './Header.css';

export default function Header() {
  const { cartCount, wishlist } = useShop();
  const { open } = useUI();
  const { pathname } = useLocation();
  const [activeId, setActiveId] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimer = useRef();

  const activeMenu = NAV_MENUS.find((m) => m.id === activeId) || null;
  const headerRef = useRef(null);

  // Home page: the header sits see-through on top of the hero photo (Tiffany style)
  // and turns white again once you scroll or open a menu.
  const isTransparent = pathname === '/' && !scrolled && !activeMenu;

  // Share the header's height so the hero can slide up underneath it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el || !('ResizeObserver' in window)) return undefined;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--header-total', `${el.offsetHeight}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Close mega menu on route change / Escape.
  useEffect(() => setActiveId(null), [pathname]);
  useEscapeKey(() => setActiveId(null), Boolean(activeId));

  // Compact header shadow once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Small hover-intent delay so the menu doesn't flicker when the cursor
  // passes over the nav on its way somewhere else.
  const openWithIntent = (id) => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setActiveId(id), activeId ? 0 : 120);
  };
  const closeWithIntent = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setActiveId(null), 150);
  };

  return (
    <header ref={headerRef} className={`header ${scrolled ? 'is-scrolled' : ''} ${activeMenu ? 'has-menu' : ''} ${isTransparent ? 'is-transparent' : ''}`}>
      <div className="header__top container">
        {/* Left: utility links (desktop) / burger + search (mobile) */}
        <div className="header__left">
          <button className="header__icon-btn hide-desktop" onClick={() => open('menu')} aria-label="Open menu">
            <Icon name="menu" size={22} />
          </button>
          <button className="header__icon-btn hide-desktop" onClick={() => open('search')} aria-label="Search">
            <Icon name="search" />
          </button>
          {UTILITY_LINKS.map((u) => (
            <Link key={u.to} to={u.to} className="header__utility hide-mobile">
              <Icon name={u.icon} size={16} />
              <span>{u.label}</span>
            </Link>
          ))}
        </div>

        <Link to="/" className="header__logo" aria-label="Home">
          <Logo />
        </Link>

        {/* Right: actions */}
        <div className="header__right">
          <button className="header__icon-btn hide-mobile" onClick={() => open('search')} aria-label="Search">
            <Icon name="search" />
          </button>
          <button className="header__icon-btn hide-mobile" onClick={() => open('appointment')} aria-label="Book an appointment">
            <Icon name="calendar" />
          </button>
          <Link to="/wishlist" className="header__icon-btn" aria-label={`Wishlist, ${wishlist.length} items`}>
            <Icon name="heart" />
            {wishlist.length > 0 && <span className="header__badge">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className="header__icon-btn" aria-label={`Cart, ${cartCount} items`}>
            <Icon name="bag" />
            {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Desktop primary nav + mega menu */}
      <div className="header__nav-wrap hide-mobile" onMouseLeave={closeWithIntent} onMouseEnter={() => window.clearTimeout(hoverTimer.current)}>
        <nav className="header__nav" aria-label="Primary">
          <ul>
            {NAV_MENUS.map((menu) => (
              <li key={menu.id} onMouseEnter={() => openWithIntent(menu.id)}>
                <NavLink
                  to={menu.to}
                  className={`header__nav-link ${activeId === menu.id ? 'is-active' : ''}`}
                  aria-expanded={activeId === menu.id}
                  aria-haspopup="true"
                  onFocus={() => setActiveId(menu.id)}
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <MegaMenu menu={activeMenu} onNavigate={() => setActiveId(null)} />
      </div>
    </header>
  );
}