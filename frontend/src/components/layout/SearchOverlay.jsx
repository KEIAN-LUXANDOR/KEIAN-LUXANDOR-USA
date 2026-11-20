import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import useEscapeKey from '../../hooks/useEscapeKey';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { POPULAR_SEARCHES, searchCollections, searchProducts } from '../../utils/search';
import { formatPrice } from '../../config/site';
import Icon from '../common/Icon';
import Media from '../common/Media';
import './SearchOverlay.css';

export default function SearchOverlay() {
  const { overlay, close } = useUI();
  const isOpen = overlay === 'search';
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useLockBodyScroll(isOpen);
  useEscapeKey(close, isOpen);

  useEffect(() => {
    if (isOpen) window.setTimeout(() => inputRef.current?.focus(), 50);
  }, [isOpen]);

  const products = useMemo(() => searchProducts(query, 4), [query]);
  const collections = useMemo(() => searchCollections(query, 6), [query]);

  if (!isOpen) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="search-ov" role="dialog" aria-modal="true" aria-label="Search">
      <div className="search-ov__scrim" onClick={close} />
      <div className="search-ov__panel">
        <form className="search-ov__form container" onSubmit={submit} role="search">
          <Icon name="search" size={22} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rings, earrings, collections…"
            aria-label="Search the store"
          />
          {query && (
            <button type="button" className="search-ov__clear" onClick={() => setQuery('')}>
              Clear
            </button>
          )}
          <button type="button" className="header__icon-btn" onClick={close} aria-label="Close search">
            <Icon name="close" />
          </button>
        </form>

        <div className="search-ov__results container">
          {!query && (
            <div>
              <p className="eyebrow muted">Popular Searches</p>
              <div className="search-ov__chips">
                {POPULAR_SEARCHES.map((s) => (
                  <button key={s} onClick={() => setQuery(s)} className="search-ov__chip">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && (
            <div className="search-ov__grid">
              <div>
                <p className="eyebrow muted">Collections</p>
                <ul className="search-ov__cols">
                  {collections.length === 0 && <li className="muted">No matching collections</li>}
                  {collections.map((c) => (
                    <li key={c.to}>
                      <Link to={c.to}>
                        {c.label} <span className="muted">· {c.group}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow muted">Products</p>
                <div className="search-ov__products">
                  {products.length === 0 && <p className="muted">No products found for “{query}”.</p>}
                  {products.map((p) => (
                    <Link key={p.id} to={`/product/${p.id}`} className="search-ov__product">
                      <Media tone={p.tone} label={p.type} />
                      <span>{p.name}</span>
                      <span className="muted">{formatPrice(p.price)}</span>
                    </Link>
                  ))}
                </div>
                {products.length > 0 && (
                  <button className="link-underline" onClick={submit}>
                    View all results
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}