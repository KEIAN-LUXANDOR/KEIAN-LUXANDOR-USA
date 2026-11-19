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

export const CATEGORIES = [
  {
    label: 'Earrings',
    to: '/collections/earrings',
    tone: 'gold',
    image: '/earring.webp',
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
    image: '/pendant.webp',
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
  { icon: 'returns', title: '15-Day Returns', text: 'Return any piece within 15 days in its original condition.' },
  { icon: 'warranty', title: 'Lifetime Warranty', text: 'Every Keian Luxandor piece is covered for life.' },
  { icon: 'appointment', title: 'Personal Appointment', text: 'Find your piece one-to-one with a Keian expert.' },
];
