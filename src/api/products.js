// ─────────────────────────────────────────────────────────────
// Talks to the Spring Boot backend.
// In development Vite forwards /api/... to http://localhost:8080 (see vite.config.js).
// ─────────────────────────────────────────────────────────────

// Picks a placeholder colour when a product has no photo yet.
const toneFor = (metal = '') => {
  const m = metal.toLowerCase();
  if (m.includes('rose')) return 'rose';
  if (m.includes('yellow')) return 'gold';
  return 'silver';
};

// Converts a product from the backend into the shape the website uses.
const normalize = (p) => ({
  id: String(p.id),
  sku: p.sku || '',
  name: p.name,
  type: p.type || '',
  metal: p.metal || '',
  price: Number(p.price) || 0,
  badge: p.badge || null,
  rating: p.rating ?? 5,
  reviews: p.reviews ?? 0,
  description: p.description || '',
  tone: p.tone || toneFor(p.metal),
  images: p.images || [],
  image: p.images?.[0] || '',
  collection: p.category || 'fine-jewelry',
});

async function request(path) {
  const res = await fetch(`/api${path}`);
  if (res.status === 404) throw new Error('not-found');
  if (!res.ok) throw new Error(`Server error ${res.status}`);
  return res.json();
}

// All products, or only the ones with a tag such as 'rings' or 'new-arrivals'.
export async function fetchProducts(tag) {
  const query = tag ? `?tag=${encodeURIComponent(tag)}` : '';
  const list = await request(`/products${query}`);
  return list.map(normalize);
}

// One product by its id (1, 2, 3 …).
export async function fetchProduct(id) {
  return normalize(await request(`/products/${encodeURIComponent(id)}`));
}