# Keian Luxandor — Jewellery E-commerce

The Keian Luxandor fine jewellery website: a React storefront, a Spring Boot API and a PostgreSQL database.

```
keian-luxandor/
├── frontend/    React + Vite website (what customers see)
├── backend/     Spring Boot REST API (Java 17)
├── database/    PostgreSQL: docker-compose, schema and sample data
├── docs/
│   ├── architecture/        Mermaid diagrams (.mmd)
│   └── project-documentation.md
└── README.md    this file
```

## Run everything on your computer

Open three terminals (in VS Code: **Terminal → New Terminal**, three times).

**1. Database** (needs Docker Desktop running)
```
cd database
docker compose up -d
```

**2. Backend** (needs Java 17)
- In STS / Eclipse: **File → Import → Existing Maven Projects** → choose the `backend` folder → right-click it → **Run As → Spring Boot App**
- Or in a terminal (if Maven is installed):
```
cd backend
mvn spring-boot:run
```
Check it: http://localhost:8080/api/products

**3. Website**
```
cd frontend
npm install      # first time only
npm run dev
```
Open http://localhost:5173

Shortcut: `npm run dev`, `npm run build` and `npm run preview` also work from this top folder — they run the website in `frontend/`.

## Documentation

- [Project documentation](docs/project-documentation.md)
- Architecture diagrams in [docs/architecture](docs/architecture) — open any `.mmd` file and paste it into https://mermaid.live to see the picture.

## Saving your work to GitHub

```
git add .
git commit -m "describe your change"
git push
```
Then open a pull request into `main` on GitHub and merge it.
