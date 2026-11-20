-- Keian Luxandor — 6 sample products (same as backend/.../SampleData.java)
-- The backend adds these by itself when the products table is empty.
-- Use this file only if you want to add them by hand. Safe to run twice.

INSERT INTO products (sku, name, type, metal, price, badge, rating, reviews, description, category) VALUES
 ('KL-R-001', 'Keian Promise Ring',           'Ring',            '14K Rose Gold',   890.00, 'New',        5, 0, 'A slender band with a single bright diamond, made to mark a quiet promise.',          'rings'),
 ('KL-B-001', 'Riviera Tennis Bracelet',      'Bracelet',        '14K White Gold', 2450.00, NULL,         5, 0, 'A continuous line of hand-set diamonds that moves softly with the wrist.',            'bracelets'),
 ('KL-E-001', 'Lumière Halo Engagement Ring', 'Engagement Ring', 'Platinum',       3900.00, 'Bestseller', 5, 0, 'A round centre stone framed by a delicate halo, finished by hand in platinum.',        'engagement-rings'),
 ('KL-S-001', 'Dewdrop Diamond Studs',        'Stud Earrings',   '14K Yellow Gold', 720.00, NULL,         5, 0, 'Everyday studs with a soft, rounded setting that catches light from every side.',    'earrings'),
 ('KL-N-001', 'Celeste Pendant Necklace',     'Pendant',         '14K Yellow Gold', 980.00, 'New',        5, 0, 'A small star-cut pendant on a fine chain, easy to wear alone or layered.',            'pendants'),
 ('KL-H-001', 'Twilight Hoop Earrings',       'Hoop Earrings',   'Sterling Silver', 240.00, NULL,         5, 0, 'Light, polished hoops with a gentle twist, sized for day-to-evening wear.',           'earrings')
ON CONFLICT (sku) DO NOTHING;

-- Main photo for each product
INSERT INTO product_images (product_id, position, url)
SELECT p.id, 0, v.url
FROM (VALUES
  ('KL-R-001', '/ring.webp'),
  ('KL-B-001', '/bracelet.webp'),
  ('KL-E-001', '/ring.webp'),
  ('KL-S-001', '/earring.webp'),
  ('KL-N-001', '/pendant.webp'),
  ('KL-H-001', '/earring.webp')
) AS v(sku, url)
JOIN products p ON p.sku = v.sku
ON CONFLICT (product_id, position) DO NOTHING;

-- Extra collections
INSERT INTO product_tags (product_id, tag)
SELECT p.id, v.tag
FROM (VALUES
  ('KL-R-001', 'fine-jewelry'), ('KL-R-001', 'gifts'), ('KL-R-001', 'signature'),
  ('KL-B-001', 'fine-jewelry'), ('KL-B-001', 'gifts'), ('KL-B-001', 'signature'),
  ('KL-E-001', 'rings'), ('KL-E-001', 'fine-jewelry'),
  ('KL-S-001', 'fine-jewelry'), ('KL-S-001', 'gifts'), ('KL-S-001', 'new-arrivals'),
  ('KL-N-001', 'necklaces'), ('KL-N-001', 'fine-jewelry'), ('KL-N-001', 'new-arrivals'),
  ('KL-H-001', 'sterling-silver'), ('KL-H-001', 'gifts')
) AS v(sku, tag)
JOIN products p ON p.sku = v.sku
WHERE NOT EXISTS (SELECT 1 FROM product_tags t WHERE t.product_id = p.id AND t.tag = v.tag);
