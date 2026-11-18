import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS, FOOTER_LEGAL } from '../../data/footer';
import { SITE } from '../../config/site';
import { useUI } from '../../context/UIContext';
import Icon from '../common/Icon';
import Logo from '../common/Logo';
import './Footer.css';

function FooterLink({ link }) {
  const { open } = useUI();
  const content = (
    <>
      {link.icon && <Icon name={link.icon} size={16} />}
      <span>{link.label}</span>
    </>
  );
  if (link.action) return <button onClick={() => open(link.action)}>{content}</button>;
  if (link.href) return <a href={link.href}>{content}</a>;
  return <Link to={link.to}>{content}</Link>;
}

export default function Footer() {
  const { showToast } = useUI();
  const [email, setEmail] = useState('');
  const [openCol, setOpenCol] = useState(null); // mobile accordion

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return showToast('Please enter a valid email address');
    setEmail('');
    showToast('Thank you — you’re on the list.');
  };

  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div>
            <h2 className="footer__nl-title">Join the World of {SITE.name}</h2>
            <p className="muted">Be the first to discover new collections, private events and stories from our atelier.</p>
          </div>
          <form
            className="footer__nl-form"
            onSubmit={subscribe}
            noValidate
            toolname="subscribe_newsletter"
            tooldescription="Subscribe an email address to the Keian Luxandor newsletter for new collections and events."
          >
            <label htmlFor="nl-email" className="visually-hidden">Email address</label>
            <input id="nl-email" name="email" className="input" type="email" required placeholder="Your email address" toolparamdescription="The email address to subscribe." value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="container footer__main">
        {FOOTER_COLUMNS.map((col) => {
          const isOpen = openCol === col.title;
          return (
            <div key={col.title} className={`footer__col ${isOpen ? 'is-open' : ''}`}>
              <button className="footer__col-title eyebrow" onClick={() => setOpenCol(isOpen ? null : col.title)} aria-expanded={isOpen}>
                {col.title}
                <Icon name={isOpen ? 'minus' : 'plus'} size={14} className="footer__col-icon" />
              </button>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="footer__col footer__col--social">
          <p className="footer__col-title eyebrow">Follow Us</p>
          <ul className="footer__social">
            {SITE.social.map((s) => (
              <li key={s.name}>
                <a href={s.url} aria-label={s.name} target="_blank" rel="noreferrer">
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <Link to="/" aria-label="Home"><Logo light /></Link>
          <ul className="footer__legal">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
          <p className="footer__copy">© {new Date().getFullYear()} {SITE.fullName} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}