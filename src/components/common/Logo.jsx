import { SITE } from '../../config/site';

// Image logo: black version on white backgrounds, white version in the black footer.
// The files are public/keian-logo-black.webp and public/keian-logo-white.webp.
// (The old text logo styles are still in Header.css under "Two-line text logo".)
export default function Logo({ light = false }) {
  return (
    <img
      className={`logo-img ${light ? 'logo-img--light' : ''}`}
      src={light ? '/keian-logo-white.webp' : '/keian-logo-black.webp'}
      alt={SITE.name}
      width="742"
      height="203"
    />
  );
}
