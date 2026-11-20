import { Link } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import Media from '../common/Media';
import Icon from '../common/Icon';
import './MegaMenu.css';

// Renders a single link row — plain text, metal/gem swatch, or thumbnail.
export function MenuLink({ link, onNavigate }) {
  return (
    <Link to={link.to} className={`mega__link ${link.strong ? 'is-strong' : ''}`} onClick={onNavigate}>
      {link.swatch && <span className="mega__swatch" style={{ background: link.swatch }} aria-hidden="true" />}
      {link.shape && <ShapeIcon shape={link.shape} />}
      {link.thumb && <Media className="mega__thumb" label={link.label} tone="gold" ratio="1 / 1" />}
      <span>{link.label}</span>
    </Link>
  );
}

// Tiny diamond-shape glyphs for the "Shop by Shape" column.
function ShapeIcon({ shape }) {
  const shapes = {
    round: <circle cx="12" cy="12" r="8" />,
    oval: <ellipse cx="12" cy="12" rx="6" ry="9" />,
    emerald: <path d="M8 3h8l3 3v12l-3 3H8l-3-3V6l3-3Z" />,
    princess: <rect x="4" y="4" width="16" height="16" />,
    pear: <path d="M12 3c4 5 7 9 7 12a7 7 0 0 1-14 0c0-3 3-7 7-12Z" />,
    cushion: <rect x="4" y="4" width="16" height="16" rx="5" />,
    marquise: <path d="M12 2c5 5 5 15 0 20-5-5-5-15 0-20Z" />,
    radiant: <path d="M7 3h10l3 4v10l-3 4H7l-3-4V7l3-4Z" />,
    'elongated-cushion': <rect x="6" y="2" width="12" height="20" rx="5" />,
  };
  return (
    <svg className="mega__shape" viewBox="0 0 24 24" aria-hidden="true">
      {shapes[shape]}
    </svg>
  );
}

export default function MegaMenu({ menu, onNavigate }) {
  const { open } = useUI();
  if (!menu) return null;

  return (
    <div className="mega" role="region" aria-label={`${menu.label} menu`}>
      <div className="mega__inner container">
        <div className="mega__body">
          {menu.intro && (
            <div className="mega__intro">
              <h3>{menu.intro.title}</h3>
              <p>{menu.intro.text}</p>
            </div>
          )}

          <div className={`mega__columns ${menu.columns.length > 5 ? 'is-dense' : ''}`}>
            {menu.columns.map((col) => (
              <div key={col.title} className={`mega__col ${col.wide ? 'is-wide' : ''} ${col.grid ? 'is-grid' : ''}`}>
                <p className="mega__title eyebrow">{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label + link.to}>
                      <MenuLink link={link} onNavigate={onNavigate} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {menu.explore && (
            <Link to={menu.explore.to} className="link-underline mega__explore" onClick={onNavigate}>
              {menu.explore.label} <Icon name="arrowRight" size={14} />
            </Link>
          )}
        </div>

        {menu.feature && (
          <Link to={menu.feature.to} className="mega__feature" onClick={onNavigate}>
            <Media tone={menu.feature.tone} label={menu.feature.title} ratio="4 / 5" />
            <p className="mega__feature-title serif">{menu.feature.title}</p>
            <span className="link-underline">{menu.feature.cta}</span>
          </Link>
        )}
      </div>

      <div className="mega__expert">
        <p>Not sure where to start? A Keian expert can help you choose.</p>
        <button
          className="link-underline"
          onClick={() => {
            onNavigate();
            open('chat');
          }}
        >
          Chat with an expert
        </button>
      </div>
    </div>
  );
}