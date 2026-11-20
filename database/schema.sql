-- Keian Luxandor — database tables (PostgreSQL)
-- For reference: the backend creates these automatically from Product.java
-- (spring.jpa.hibernate.ddl-auto=update). Keep this file in step with the Java code.

-- One piece of jewellery
CREATE TABLE IF NOT EXISTS products (
    id           BIGSERIAL PRIMARY KEY,
    sku          VARCHAR(255) UNIQUE,
    name         VARCHAR(255)   NOT NULL,
    type         VARCHAR(255),              -- e.g. 'Ring', 'Bracelet'
    metal        VARCHAR(255),              -- e.g. '14K Rose Gold'
    price        NUMERIC(12, 2) NOT NULL,
    badge        VARCHAR(255),              -- e.g. 'New', or empty
    rating       INTEGER DEFAULT 5,
    reviews      INTEGER DEFAULT 0,
    description  VARCHAR(2000),
    category     VARCHAR(255)               -- main collection, e.g. 'rings'
);

-- Photos of a product, in display order (position 0 = main photo)
CREATE TABLE IF NOT EXISTS product_images (
    product_id  BIGINT       NOT NULL REFERENCES products (id),
    position    INTEGER      NOT NULL,
    url         VARCHAR(255),
    PRIMARY KEY (product_id, position)
);

-- Extra collections a product appears in, e.g. 'gifts', 'new-arrivals'
CREATE TABLE IF NOT EXISTS product_tags (
    product_id  BIGINT       NOT NULL REFERENCES products (id),
    tag         VARCHAR(255)
);
