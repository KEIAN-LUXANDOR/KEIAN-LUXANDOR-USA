# Keian Luxandor — Project Documentation

Last updated: 20 November 2026

## 1. What this project is

The online store for **Keian Luxandor**, a fine jewellery brand. Customers browse collections (engagement rings, wedding rings, earrings, necklaces, bracelets, gifts), save favourites, add pieces to their bag, book appointments and contact the team.

| Part | Folder | Technology | Status |
|---|---|---|---|
| Website | `frontend/` | React 19, Vite, React Router | Built — home page, menus, collection & product pages, cart, wishlist, contact |
| API | `backend/` | Spring Boot 4, Java 17, Spring Data JPA | Started — product API (`/api/products`) |
| Database | `database/` | PostgreSQL 17 (Docker on your computer) | Started — products, product photos, product tags |
| Hosting | — | Microsoft Azure (planned) | Not set up yet |

## 2. Folder structure

```
keian-luxandor/
├── frontend/                  React website
│   ├── public/                photos (.webp), fonts, ring video, llms.txt
│   ├── src/
│   │   ├── components/        header, footer, home sections, common pieces
│   │   ├── pages/             Home, Category, Product, About, Contact, Cart …
│   │   ├── data/              text for home page, menus, footer (edit here)
│   │   ├── config/site.js     phone, email, social links
│   │   ├── styles/            colour palette and fonts
│   │   └── api/products.js    talks to the backend
│   ├── index.html
│   ├── package.json
│   └── vite.config.js         sends /api to http://localhost:8080
├── backend/                   Spring Boot API
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/keianluxandor/backend/
│       │   ├── KeianBackendApplication.java
│       │   └── product/       Product, ProductRepository, ProductController, SampleData
│       └── resources/application.properties
├── database/
│   ├── docker-compose.yml     starts PostgreSQL
│   ├── schema.sql             the tables
│   └── seed-data.sql          6 sample products
├── docs/
│   ├── architecture/          diagrams (Mermaid .mmd)
│   └── project-documentation.md
└── README.md
```

## 3. Architecture diagrams

All diagrams are in `docs/architecture/`. Open a `.mmd` file, copy everything, and paste it into https://mermaid.live to see it.

| File | Shows |
|---|---|
| `system-architecture.mmd` | The whole system: device → cloud → website → API → database → outside services |
| `backend-architecture.mmd` | Inside the Spring Boot API: controllers → services → repositories → entities |
| `database-er-diagram.mmd` | The database tables and how they connect |
| `customer-shopping-flow.mmd` | One order, from browsing to delivery and returns |
| `azure-deployment.mmd` | How the site will run on Microsoft Azure |

In the diagrams, ✔ or solid boxes are built today; dashed boxes are planned.

## 4. Running it on your computer

You need: **Node.js** (website), **Java 17** + **STS** (backend), **Docker Desktop** (database).

1. **Database** — `cd database` → `docker compose up -d`
2. **Backend** — open `backend` in STS → Run As → Spring Boot App → check http://localhost:8080/api/products
3. **Website** — `cd frontend` → `npm install` (first time) → `npm run dev` → open http://localhost:5173

To test the fast, real version of the website: `npm run build` then `npm run preview` (http://localhost:4173).

## 5. API (backend)

| Method | Address | Returns |
|---|---|---|
| GET | `/api/products` | all products |
| GET | `/api/products?tag=rings` | products in one collection |
| GET | `/api/products/{id}` | one product, or 404 |

Database connection settings come from `DB_URL`, `DB_USER`, `DB_PASSWORD` (local defaults are in `application.properties`).

## 6. Database

Built today:

| Table | Holds |
|---|---|
| `products` | name, SKU, type, metal, price, badge, description, main category |
| `product_images` | photo paths for each product, in order |
| `product_tags` | extra collections a product appears in (gifts, new-arrivals …) |

Planned (see `database-er-diagram.mmd`): customers, addresses, carts, cart items, wishlist, orders, order items, payments, returns, appointments.

## 7. Design system (website)

Colours (`frontend/src/styles/variables.css`):

| Name | Hex | Use |
|---|---|---|
| Ivory | `#FEFCF9` | background |
| Sand | `#F8F4EE` | alternate home sections, newsletter |
| Espresso | `#3D3229` | text, buttons, footer |
| Warm Grey | `#6E6A65` | small text |
| Gold | `#B8955A` | lines, icons, link hover |
| Line | `#E6E3DE` | borders |
| Sale Red | `#9C2B2B` | sale prices and errors only |

Fonts: **Ibarra Real Nova** (titles and headings), **Jost** (body text), stored in `frontend/public/fonts`.

Photos: use `.webp`. Category tiles also have a small `-400.webp` copy for phones.

## 8. Working with GitHub

Repository: **KEIAN-LUXANDOR-USA**

1. Work on your own branch (for example `amol/added`).
2. Save and send: `git add .` → `git commit -m "what changed"` → `git push`
3. On GitHub, open a **pull request** into `main` and merge it.
4. Bring `main` back into your branch: `git pull --no-edit origin main`

Never put passwords or API keys in GitHub — use environment variables (`.env` files are ignored).

## 9. Roadmap

1. Product catalog fully from the backend (photos, sizes, metals)
2. Cart and checkout with payments (Stripe / PayPal)
3. Orders, insured shipping and order emails
4. Customer accounts and 15-day returns
5. Admin panel for the Keian team
6. Deploy to Azure with GitHub Actions
