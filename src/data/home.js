// ─────────────────────────────────────────────────────────────
// Home page content. Every `image` field is optional — leave it empty to
// show the styled placeholder, or use an image from the public folder
// like '/heroBanner.webp'.
// ─────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'The Keian Signature Collection',
  title: 'Brilliance, Redefined',
  cta: { label: 'Shop Signature', to: '/collections/signature' },
  image: '/heroBanner.webp',
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
    image: '/pendant.webp',
  },
  {
    label: 'Rings',
    to: '/collections/rings',
    tone: 'rose',
    image: '/ring.webp',
  },
  {
    label: 'Bracelets',
    to: '/collections/bracelets',
    tone: 'silver',
    image: '/bracelet.webp',
  },
  {
    label: 'Pendants',
    to: '/collections/pendants',
    tone: 'gold',
    image: '/earring.webp',
  },
  {
    label: 'Necklaces',
    to: '/collections/necklaces',
    tone: 'cream',
    image: '/necklace.webp',
  },
];

export const CAMPAIGN = {
  title: 'Unmistakably Her',
  text: 'You know her style and all her little things. Find a Keian Luxandor piece that feels just like her — lab-grown diamonds, made to be treasured.',
  cta: { label: 'Shop Gifts for Her', to: '/collections/gifts' },
  image: '/her-style.webp',
  tone: 'cream',
};

// Zig-zag story section (below the "Unmistakably Her" section)
export const STORIES = [
  {
    eyebrow: 'A Keian Promise',
    title: 'Promise Ring',
    text: 'A promise made in brilliance — lab-grown diamonds, set to be worn every day and treasured for a lifetime.',
    cta: { label: 'Shop Rings', to: '/collections/rings' },
    image: '/ring.webp',
  },
  {
    eyebrow: 'The Keian Signature',
    title: 'Tennis Bracelet',
    text: 'A continuous line of light around her wrist — effortless sparkle from day to night.',
    cta: { label: 'Shop Bracelets', to: '/collections/bracelets' },
    image: '/bracelet.webp',
  },
];

// "Our Craft" section (below the Promise Ring / Tennis Bracelet banners)
export const CRAFT = {
  eyebrow: 'Our Craft',
  title: ['Made by Hand,', 'Made to Last'],
  text: 'From the first sketch to the final polish, every Keian Luxandor piece is shaped with care — lab-grown diamonds, finished to shine for a lifetime.',
  cta: { label: 'Discover Our Story', to: '/about-us' },
  image: '/bracelet.webp',
};

// Benefits strip (end of home page, above the newsletter).
// Please keep these in line with Keian's real shipping, returns and warranty policies.
export const BENEFITS = [
  { icon: 'ship', title: 'Complimentary Shipping', text: 'Every order is insured and delivered with care.' },
  { icon: 'returns', title: 'Easy Returns', text: 'Complimentary returns on every order.' },
  { icon: 'warranty', title: 'Lifetime Warranty', text: 'Every Keian Luxandor piece is covered for life.' },
  { icon: 'appointment', title: 'Personal Appointment', text: 'Find your piece one-to-one with a Keian expert.' },
];

export const BRIDAL = {
  title: 'Celebrate Forever',
  text: 'Designed to be loved for a lifetime.',
  ctas: [
    { label: 'Shop Wedding Rings', to: '/collections/wedding-rings' },
    { label: 'Shop Engagement Rings', to: '/collections/engagement-rings' },
  ],
  image: '/celebrate.webp',
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