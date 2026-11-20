// ─────────────────────────────────────────────────────────────
// Main navigation / mega-menu data.
// Structure: menu → columns → links, plus an optional feature card.
// Every link points to /collections/:slug, which the Category page renders.
// ─────────────────────────────────────────────────────────────
const c = (slug) => `/collections/${slug}`;
const l = (label, slug, extra = {}) => ({ label, to: c(slug), ...extra });

const METALS = {
  yellow: '#d9b45a',
  rose: '#e2a98f',
  white: '#e4e4e4',
  silver: '#c9ccd1',
  platinum: '#d6d8db',
  mixed: 'linear-gradient(135deg,#d9b45a 0 50%,#e4e4e4 50% 100%)',
  twoTone: 'linear-gradient(135deg,#d9b45a 0 50%,#e2a98f 50% 100%)',
};

export const NAV_MENUS = [
  {
    id: 'jewelry',
    label: 'Jewelry',
    to: c('fine-jewelry'),
    columns: [
      {
        title: 'Rings',
        links: [
          l('Everyday Rings', 'rings-everyday'),
          l('Promise Rings', 'rings-promise'),
          l('Stackable Rings', 'rings-stackable'),
          l('Cocktail Rings', 'rings-cocktail'),
          l('Shop All Rings', 'rings', { strong: true }),
        ],
      },
      {
        title: 'Earrings',
        links: [
          l('Studs', 'earrings-stud'),
          l('Hoops & Huggies', 'earrings-hoop'),
          l('Drops', 'earrings-drop'),
          l('Shop All Earrings', 'earrings', { strong: true }),
        ],
      },
      {
        title: 'Necklaces & Pendants',
        links: [
          l('Pendants', 'pendants'),
          l('Chain Necklaces', 'necklaces-chain'),
          l('Layering Necklaces', 'necklaces-layering'),
          l('Shop All Necklaces', 'necklaces', { strong: true }),
        ],
      },
      {
        title: 'Bracelets',
        links: [
          l('Tennis Bracelets', 'bracelets-tennis'),
          l('Bangles', 'bracelets-bangle'),
          l('Chain Bracelets', 'bracelets-chain'),
          l('Shop All Bracelets', 'bracelets', { strong: true }),
        ],
      },
      {
        title: 'Shop by Metal',
        links: [
          l('Yellow Gold', 'yellow-gold', { swatch: METALS.yellow }),
          l('Rose Gold', 'rose-gold', { swatch: METALS.rose }),
          l('White Gold', 'white-gold', { swatch: METALS.white }),
          l('Silver', 'sterling-silver', { swatch: METALS.silver }),
          l('Two-Tone', 'two-tone', { swatch: METALS.twoTone }),
        ],
      },
      {
        title: 'Shop by Stone',
        links: [
          l('Diamond Jewelry', 'diamond-jewelry'),
          l('Gemstone Jewelry', 'gemstone-jewelry'),
          l('Birthstone Jewelry', 'birthstone-jewelry'),
        ],
      },
      {
        title: 'New & Loved',
        links: [
          l('New Arrivals', 'new-arrivals'),
          l('Bestsellers', 'bestsellers'),
          l('Gifts Under $500', 'price-under-500'),
        ],
      },
    ],
    explore: l('Explore All Jewelry', 'fine-jewelry'),
    feature: { title: 'Everyday Brilliance', cta: 'Shop New Arrivals', to: c('new-arrivals'), tone: 'gold' },
  },
  {
    id: 'signature',
    label: 'Signature',
    to: c('signature'),
    intro: {
      title: 'The Keian Signature Collection',
      text: 'Clean lines, bright diamonds and warm gold — our signature pieces are made to be worn every day and kept forever.',
    },
    columns: [
      {
        title: 'Categories',
        grid: true,
        links: [
          l('Rings', 'signature-rings', { thumb: true }),
          l('Earrings', 'signature-earrings', { thumb: true }),
          l('Bracelets', 'signature-bracelets', { thumb: true }),
          l('Bangles', 'signature-bangles', { thumb: true }),
          l('Pendants', 'signature-pendants', { thumb: true }),
          l('Necklaces', 'signature-necklaces', { thumb: true }),
        ],
      },
    ],
    explore: l('Explore Signature', 'signature'),
    feature: { title: 'Brilliance, Redefined', cta: 'Shop Signature', to: c('signature'), tone: 'gold' },
  },
  {
    id: 'engagement',
    label: 'Engagement Rings',
    to: c('engagement-rings'),
    columns: [
      {
        title: 'Shop by Shape',
        links: [
          ['Round', 'round'], ['Oval', 'oval'], ['Pear', 'pear'], ['Emerald', 'emerald'],
          ['Cushion', 'cushion'], ['Princess', 'princess'], ['Marquise', 'marquise'], ['Radiant', 'radiant'],
        ].map(([label, s]) => l(label, `engagement-${s}`, { shape: s })),
      },
      {
        title: 'Shop by Style',
        links: ['Solitaire', 'Halo', 'Hidden Halo', 'Three Stone', 'Pavé', 'Vintage-Inspired', 'Toi et Moi'].map((label) =>
          l(label, `engagement-${label.toLowerCase().replace(/é/g, 'e').replace(/\s+/g, '-')}`),
        ),
      },
      {
        title: 'Shop by Metal',
        links: [
          l('Yellow Gold', 'engagement-yellow-gold', { swatch: METALS.yellow }),
          l('White Gold', 'engagement-white-gold', { swatch: METALS.white }),
          l('Rose Gold', 'engagement-rose-gold', { swatch: METALS.rose }),
          l('Platinum', 'engagement-platinum', { swatch: METALS.platinum }),
        ],
      },
      {
        title: 'Ring Guides',
        links: [
          { label: 'Engagement Ring Guide', to: '/guides/engagement-ring-guide' },
          { label: 'Diamond Buying Guide', to: '/guides/choose-a-diamond' },
          { label: 'Diamond Clarity Explained', to: '/guides/diamond-clarity' },
          { label: 'Shop with Confidence', to: '/shop-with-confidence' },
        ],
      },
    ],
    explore: l('Explore Engagement Rings', 'engagement-rings'),
    feature: { title: 'Find Your Ring, Together', cta: 'Talk to a Keian Expert', to: '/contact-us', tone: 'blush' },
  },
  {
    id: 'wedding',
    label: 'Wedding Rings',
    to: c('wedding-rings'),
    columns: [
      {
        title: "Women's Bands",
        links: [
          l('Classic Bands', 'wedding-classic'),
          l('Diamond Bands', 'wedding-diamond'),
          l('Eternity Bands', 'wedding-eternity'),
          l('Curved Bands', 'wedding-curved'),
          l('Stackable Bands', 'wedding-stackable'),
          l("Shop All Women's Bands", 'wedding-womens', { strong: true }),
        ],
      },
      {
        title: "Men's Bands",
        links: [
          l('Classic Bands', 'mens-bands-classic'),
          l('Diamond Bands', 'mens-bands-diamond'),
          l('Textured Bands', 'mens-bands-textured'),
          l("Shop All Men's Bands", 'mens-wedding-bands', { strong: true }),
        ],
      },
      {
        title: 'Shop by Metal',
        links: [
          l('Yellow Gold', 'wedding-yellow-gold', { swatch: METALS.yellow }),
          l('White Gold', 'wedding-white-gold', { swatch: METALS.white }),
          l('Rose Gold', 'wedding-rose-gold', { swatch: METALS.rose }),
          l('Platinum', 'wedding-platinum', { swatch: METALS.platinum }),
        ],
      },
    ],
    explore: l('Explore Wedding Rings', 'wedding-rings'),
    feature: { title: 'Made to Be Worn Together', cta: 'Shop Wedding Rings', to: c('wedding-rings'), tone: 'gold' },
  },
  {
    id: 'womens',
    label: "Women's",
    to: c('womens-jewelry'),
    columns: [
      {
        title: "Women's Jewelry",
        links: [
          l('Rings', 'womens-rings'),
          l('Earrings', 'womens-earrings'),
          l('Necklaces', 'womens-necklaces'),
          l('Pendants', 'womens-pendants'),
          l('Bracelets', 'womens-bracelets'),
          l('Bangles', 'womens-bangles'),
          l("Shop All Women's Jewelry", 'womens-jewelry', { strong: true }),
        ],
      },
      {
        title: 'Shop by Style',
        links: [
          l('Everyday Essentials', 'womens-everyday'),
          l('Statement Pieces', 'womens-statement'),
          l('Diamond Jewelry', 'womens-diamond-jewelry'),
          l('Stackable Rings', 'womens-stackable-rings'),
          l('Tennis Bracelets', 'womens-tennis-bracelets'),
        ],
      },
      {
        title: 'Shop by Metal',
        links: [
          l('Yellow Gold', 'womens-yellow-gold', { swatch: METALS.yellow }),
          l('Rose Gold', 'womens-rose-gold', { swatch: METALS.rose }),
          l('White Gold', 'womens-white-gold', { swatch: METALS.white }),
          l('Silver', 'womens-silver', { swatch: METALS.silver }),
          l('Two-Tone', 'womens-two-tone', { swatch: METALS.twoTone }),
        ],
      },
    ],
    explore: l("Explore All Women's Jewelry", 'womens-jewelry'),
    feature: { title: 'Made for Every Moment', cta: "Shop Women's", to: c('womens-jewelry'), tone: 'blush' },
  },
  {
    id: 'gifts',
    label: 'Gifts',
    to: c('gifts'),
    columns: [
      {
        title: 'Gifts For',
        links: [
          l('Gifts for Her', 'gifts-for-her'),
          l('Gifts for Him', 'gifts-for-him'),
          l('Gifts for Mom', 'gifts-for-mom'),
        ],
      },
      {
        title: 'Occasions',
        links: [
          l('Anniversary', 'gifts-anniversary'),
          l('Birthday', 'gifts-birthday'),
          l('Engagement & Wedding', 'gifts-wedding'),
          l('Graduation', 'gifts-graduation'),
        ],
      },
      {
        title: 'Shop by Price',
        links: [
          l('Under $500', 'price-under-500'),
          l('$500 – $1,000', 'price-500-1000'),
          l('$1,000 – $2,500', 'price-1000-2500'),
          l('$2,500 & Above', 'price-over-2500'),
        ],
      },
      {
        title: 'Birthstones',
        wide: true,
        links: [
          ['January · Garnet', 'garnet', '#7b1e2b'], ['February · Amethyst', 'amethyst', '#8e5fb6'],
          ['March · Aquamarine', 'aquamarine', '#7fd1d8'], ['April · Diamond', 'diamond', '#eef2f5'],
          ['May · Emerald', 'emerald', '#1f8a5b'], ['June · Pearl', 'pearl', '#f1ece2'],
          ['July · Ruby', 'ruby', '#b3123a'], ['August · Peridot', 'peridot', '#a3c33a'],
          ['September · Sapphire', 'sapphire', '#1d3f9a'], ['October · Tourmaline', 'tourmaline', '#e48bb0'],
          ['November · Citrine', 'citrine', '#e6a73a'], ['December · Topaz', 'topaz', '#4aa3d6'],
        ].map(([label, s, color]) => l(label, `birthstone-${s}`, { swatch: color })),
      },
    ],
    explore: l('Shop All Gifts', 'gifts'),
    feature: { title: 'Unmistakably Her', cta: 'Shop Gifts for Her', to: c('gifts-for-her'), tone: 'blush' },
  },
  {
    id: 'about',
    label: 'About Us',
    to: '/about-us',
    columns: [
      {
        title: 'Keian Luxandor',
        links: [
          { label: 'Our Story', to: '/about-us' },
          { label: 'Our Promise', to: '/our-values' },
          { label: 'Craftsmanship', to: '/about-us#craft' },
        ],
      },
      {
        title: 'Customer Care',
        links: [
          { label: 'Shipping & Returns', to: '/our-values#returns' },
          { label: 'Warranty & Care', to: '/our-values#warranty' },
          { label: 'Contact Us', to: '/contact-us' },
          { label: 'Find a Store', to: '/store-locator' },
        ],
      },
      {
        title: 'Guides',
        links: [
          { label: 'Engagement Ring Guide', to: '/guides/engagement-ring-guide' },
          { label: 'Diamond Buying Guide', to: '/guides/choose-a-diamond' },
        ],
      },
    ],
    feature: { title: 'Made by Hand, Made to Last', cta: 'Read Our Story', to: '/about-us', tone: 'cream' },
  },
];

export const UTILITY_LINKS = [
  { label: 'Find a Store', to: '/store-locator', icon: 'pin' },
  { label: 'Contact Us', to: '/contact-us', icon: 'phone' },
];