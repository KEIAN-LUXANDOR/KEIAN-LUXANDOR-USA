import { getProductsForSlug } from '../data/products';
import { NAV_MENUS } from '../data/navigation';

const INDEX_SLUGS = ['rings', 'earrings', 'bracelets', 'necklaces', 'pendants', 'engagement-rings', 'wedding-rings', 'mens-jewelry', 'signature', 'sterling-silver'];

let productIndex;
const getIndex = () => {
  if (!productIndex) productIndex = INDEX_SLUGS.flatMap((s) => getProductsForSlug(s, 12));
  return productIndex;
};

const COLLECTION_INDEX = NAV_MENUS.flatMap((m) =>
  m.columns.flatMap((c) => c.links.map((l) => ({ label: l.label, to: l.to, group: m.label }))),
);

const matches = (text, q) => q.split(/\s+/).every((w) => text.toLowerCase().includes(w));

export const searchProducts = (query, limit = 24) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getIndex().filter((p) => matches(`${p.name} ${p.type} ${p.metal}`, q)).slice(0, limit);
};

export const searchCollections = (query, limit = 6) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const seen = new Set();
  return COLLECTION_INDEX.filter((c) => {
    if (seen.has(c.to) || !matches(`${c.label} ${c.group}`, q)) return false;
    seen.add(c.to);
    return true;
  }).slice(0, limit);
};

export const POPULAR_SEARCHES = ['Engagement rings', 'Tennis bracelet', 'Hoop earrings', 'Yellow gold', 'Diamond pendant', 'Wedding band'];