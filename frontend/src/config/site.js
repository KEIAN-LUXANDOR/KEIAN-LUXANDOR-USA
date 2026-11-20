// ─────────────────────────────────────────────────────────────
// Central brand / site configuration.
// Swap these values (and the images in src/data/*) for your own brand.
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Keian Luxandor',
  fullName: 'Keian Luxandor',
  logoTop: 'Keian',          // first line of the logo (underlined)
  logoBottom: 'Luxandor',    // second line of the logo
  phone: '+91 9898552297',
  email: 'info@keianluxandor.com',
  currency: 'USD',
  locale: 'en-US',
  social: [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'Pinterest', url: '#', icon: 'pinterest' },
    { name: 'YouTube', url: '#', icon: 'youtube' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  ],
};

export const formatPrice = (value) =>
  new Intl.NumberFormat(SITE.locale, {
    style: 'currency',
    currency: SITE.currency,
    maximumFractionDigits: 0,
  }).format(value);