# Keian Luxandor — Backend (API)

Spring Boot 4 + Java 17 + PostgreSQL. Serves products to the website at `/api/products`.

## Run it on your computer

1. Start the database first (see `../database/README.md`):
   ```
   cd database
   docker compose up -d
   ```
2. In **STS**: **File → Import → Existing Maven Projects** → choose this `backend` folder.
   Then right-click the `keian-backend` project → **Run As → Spring Boot App**.
3. Check it in your browser: http://localhost:8080/api/products

Then start the website (`npm run dev` in the `frontend` folder).

## Addresses

| Address | Gives you |
|---|---|
| `GET /api/products` | every product |
| `GET /api/products?tag=rings` | products in one collection |
| `GET /api/products/1` | one product |

## Code layout

```
src/main/java/com/keianluxandor/backend/
├── KeianBackendApplication.java   starts the app
└── product/
    ├── Product.java               the product table
    ├── ProductRepository.java     reads/saves products
    ├── ProductController.java     the /api/products addresses
    └── SampleData.java            adds 6 sample products the first time
src/main/resources/application.properties   port 8080 + database settings
```

The database settings can be changed with environment variables `DB_URL`, `DB_USER` and `DB_PASSWORD` (used on the live server).
