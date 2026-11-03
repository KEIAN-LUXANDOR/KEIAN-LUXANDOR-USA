// ─────────────────────────────────────────────────────────────
// Home page content. Every `image` field is optional — leave it empty to
// show the styled placeholder, or use an image from the public folder
// like '/heroBanner.png'.
// ─────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'The Keian Signature Collection',
  title: 'Brilliance, Redefined',
  cta: { label: 'Shop Signature', to: '/collections/signature' },
  image: '/heroBanner.png',
  tone: 'gold',
};

export const TRUST_BADGES = [
  { icon: 'award', label: 'Most Awarded Brand' },
  { icon: 'gem', label: 'GIA Verified' },
  { icon: 'leaf', label: 'Recycled Gold Initiative' },
  { icon: 'hash', label: 'Unique Serial Number' },
  { icon: 'calendar', label: 'Since 1989' },
];

// export const CATEGORIES = [
//   { label: 'Earrings', to: '/collections/earrings', tone: 'gold' },
//   { label: 'Rings', to: '/collections/rings', tone: 'rose' },
//   { label: 'Bracelets', to: '/collections/bracelets', tone: 'silver' },
//   { label: 'Pendants', to: '/collections/pendants', tone: 'gold' },
//   { label: 'Necklaces', to: '/collections/necklaces', tone: 'cream' },
// ];


export const CATEGORIES = [
  {
    label: 'Earrings',
    to: '/collections/earrings',
    tone: 'gold',
    image: '/pendant.png',
  },
  {
    label: 'Rings',
    to: '/collections/rings',
    tone: 'rose',
    image: '/ring.png',
  },
  {
    label: 'Bracelets',
    to: '/collections/bracelets',
    tone: 'silver',
    image: '/bracelet.png',
  },
  {
    label: 'Pendants',
    to: '/collections/pendants',
    tone: 'gold',
    image: '/earring.png',
  },
  {
    label: 'Necklaces',
    to: '/collections/necklaces',
    tone: 'cream',
    image: '/necklace.png',
  },
];

export const CAMPAIGN = {
  title: 'Gifts Wrapped in Brilliance',
  text: 'Every Keian Luxandor piece arrives in our signature box — lab-grown diamonds crafted to be treasured today and passed down for generations.',
  cta: { label: 'Shop Gifts', to: '/collections/gifts' },
  image: '/image2.png',
  tone: 'cream',
};

export const BRIDAL = {
  title: 'Celebrate Forever',
  text: 'Designed to be loved for a lifetime.',
  ctas: [
    { label: 'Shop Wedding Rings', to: '/collections/wedding-rings' },
    { label: 'Shop Engagement Rings', to: '/collections/engagement-rings' },
  ],
  image: 'celebrate.png',
  tone: 'blush',
};

export const EDITS = [
  {
    title: 'The Silver Edit',
    text: ['Born in New York.', 'Designed for everywhere.'],
    cta: { label: 'Shop Silver', to: '/collections/sterling-silver' },
    image: '',
    tone: 'silver',
  },
  {
    title: "The Men's Edit",
    text: ['Personal. Expressive. Unapologetically his.'],
    cta: { label: "Shop Men's", to: '/collections/mens-jewelry' },
    image: '',
    tone: 'dark',
  },
];

export const PROMO_CARDS = [
  {
    title: 'Locate Your Nearest Store',
    text: 'Discover our trusted partner stores near you.',
    cta: { label: 'Find a Store', to: '/store-locator' },
    image: '',
    tone: 'cream',
  },
  {
    title: 'For Children in Need',
    text: 'All proceeds from our giving-back pieces support our charity partners.',
    cta: { label: 'Learn More', to: '/collections/giving-back' },
    image: '',
    tone: 'silver',
  },
];

export const STORY = {
  title: 'Our Story',
  text: 'Discover the passion and artistry behind every piece we create.',
  cta: { label: 'Explore Our Journey', to: '/about-us' },
  image: '',
  tone: 'gold',
};