import { SITE } from '../config/site';

export const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Engagement Rings', to: '/collections/engagement-rings' },
      { label: 'Wedding Rings', to: '/collections/wedding-rings' },
      { label: 'Fine Jewelry', to: '/collections/fine-jewelry' },
      { label: "Women's Jewelry", to: '/collections/womens-jewelry' },
      { label: 'Gifts', to: '/collections/gifts' },
    ],
  },
  {
    title: 'About Keian',
    links: [
      { label: 'Our Story', to: '/about-us' },
      { label: 'Our Promise', to: '/our-values' },
      { label: 'Ring Guides', to: '/guides/engagement-ring-guide' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/our-values#returns' },
      { label: 'Warranty & Care', to: '/our-values#warranty' },
      { label: 'Shop with Confidence', to: '/shop-with-confidence' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: SITE.phone, href: `tel:${SITE.phone.replace(/\D/g, '')}`, icon: 'phone' },
      { label: SITE.email, href: `mailto:${SITE.email}`, icon: 'mail' },
      { label: 'Live Chat', action: 'chat', icon: 'chat' },
      { label: 'Book Appointment', action: 'appointment', icon: 'calendar' },
      { label: 'Find a Store', to: '/store-locator', icon: 'pin' },
    ],
  },
  {
    title: 'My Account',
    links: [
      { label: 'Wishlist', to: '/wishlist' },
      { label: 'Shopping Bag', to: '/cart' },
    ],
  },
];

export const FOOTER_LEGAL = [
  { label: 'Sitemap', to: '/sitemap' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];