import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchOverlay from './SearchOverlay';
import MobileMenu from './MobileMenu';
import AppointmentModal from '../common/AppointmentModal';
import ChatWidget from '../common/ChatWidget';
import { useUI } from '../../context/UIContext';

// App shell: shared chrome around every routed page.
export default function Layout() {
  const { pathname, hash } = useLocation();
  const { toast, close } = useUI();

  // Scroll to top (or to #hash) and close overlays on navigation.
  useEffect(() => {
    close();
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />

      {/* Global overlays */}
      <MobileMenu />
      <SearchOverlay />
      <AppointmentModal />
      <ChatWidget />
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
}