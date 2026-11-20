import { useMemo, useState } from 'react';
import PageHero from '../components/common/PageHero';
import Icon from '../components/common/Icon';
import { STORES } from '../data/stores';
import { useUI } from '../context/UIContext';
import './Content.css';

export default function StoreLocator() {
  const { open, showToast } = useUI();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(STORES[0].id);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return STORES;
    return STORES.filter((s) => `${s.name} ${s.city} ${s.state} ${s.zip}`.toLowerCase().includes(q));
  }, [query]);

  const locateMe = () => {
    if (!navigator.geolocation) return showToast('Location is not available in this browser');
    navigator.geolocation.getCurrentPosition(
      () => showToast('Showing stores near you'), // TODO: sort by distance using your store API
      () => showToast('Location permission was denied'),
    );
  };

  const active = STORES.find((s) => s.id === selected);

  return (
    <>
      <PageHero title="Find a Store" text="See Keian Luxandor pieces in person at a store near you." crumbs={[{ label: 'Find a Store' }]} />
      <section className="section container locator">
        <div className="locator__panel">
          <form className="locator__search" onSubmit={(e) => e.preventDefault()} role="search">
            <input className="input" placeholder="City, state or zip code" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search stores" />
            <button type="button" className="btn btn--outline" onClick={locateMe}>
              <Icon name="locate" size={16} /> Use My Location
            </button>
          </form>
          <p className="muted locator__count">{results.length} stores found</p>
          <ul className="locator__list">
            {results.map((s) => (
              <li key={s.id}>
                <button className={`store ${s.id === selected ? 'is-active' : ''}`} onClick={() => setSelected(s.id)}>
                  <span className="eyebrow muted">{s.type}</span>
                  <span className="store__name serif">{s.name}</span>
                  <span>{s.address}, {s.city}, {s.state} {s.zip}</span>
                  <span className="muted">{s.hours}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="locator__map" aria-label="Map">
          {/* Replace with Google Maps / Mapbox. Pins are positioned for demo only. */}
          <svg viewBox="0 0 400 260" className="locator__svg" aria-hidden="true">
            <path d="M30 60 Q90 20 170 40 T330 50 Q380 80 370 150 T300 230 Q200 250 120 220 T30 150 Z" />
          </svg>
          {results.map((s, i) => (
            <button
              key={s.id}
              className={`locator__pin ${s.id === selected ? 'is-active' : ''}`}
              style={{ left: `${18 + ((s.id * 37) % 64)}%`, top: `${22 + ((s.id * 53 + i) % 52)}%` }}
              onClick={() => setSelected(s.id)}
              aria-label={s.name}
            >
              <Icon name="pin" size={26} filled={s.id === selected} />
            </button>
          ))}
          {active && (
            <div className="locator__card">
              <p className="serif">{active.name}</p>
              <p className="muted">{active.address}, {active.city}</p>
              <p className="muted">{active.phone}</p>
              <button className="link-underline" onClick={() => open('appointment')}>Book Appointment</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}