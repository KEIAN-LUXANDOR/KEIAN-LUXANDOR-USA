import { BENEFITS } from '../../data/home';
import Reveal from '../common/Reveal';

// Simple gold line icons drawn for Keian.
const ICONS = {
  ship: (
    <>
      <path d="M3 9h16v13H3z" />
      <path d="M19 13h5l4 4v5h-9z" />
      <circle cx="8" cy="23.5" r="2.3" />
      <circle cx="23" cy="23.5" r="2.3" />
    </>
  ),
  returns: (
    <>
      <path d="M6 11l10-5 10 5v11l-10 5-10-5z" />
      <path d="M6 11l10 5 10-5M16 16v11" />
      <path d="M3 6h5v5" />
      <path d="M3 6c3 0 5 1 6 3" />
    </>
  ),
  warranty: (
    <>
      <path d="M16 3l10 4v8c0 7-4.5 11-10 14C10.5 26 6 22 6 15V7z" />
      <path d="M11.5 15.5l3 3 6-6" />
    </>
  ),
  appointment: (
    <>
      <rect x="5" y="7" width="22" height="20" rx="1" />
      <path d="M5 13h22M11 4v6M21 4v6" />
      <path d="M16 17l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z" />
    </>
  ),
};

// Benefits strip: a thin gold line above each benefit, left-aligned text.
export default function Benefits() {
  return (
    <section className="benefits" aria-label="Our services">
      <Reveal as="ul" className="benefits__list">
        {BENEFITS.map((b) => (
          <li key={b.title} className="benefits__item">
            <svg className="benefits__icon" viewBox="0 0 32 32" aria-hidden="true">{ICONS[b.icon]}</svg>
            <span className="benefits__title">{b.title}</span>
            <p className="benefits__text">{b.text}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
