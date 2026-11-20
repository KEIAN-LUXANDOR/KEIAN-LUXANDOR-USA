# Keian Luxandor — Frontend (website)

The customer website, built with React and Vite.

## Run it on your computer

Run these **inside the `frontend` folder**:

```
cd frontend
npm install      # first time only
npm run dev      # editing mode: http://localhost:5173
```

Product pages need the backend running (see `../backend/README.md`). The website forwards every `/api/...` request to http://localhost:8080.

## Check the real (fast) version

```
npm run build
npm run preview  # http://localhost:4173
```

## Where things are

- `src/data/home.js` – home page text, images and the Our Craft video
- `src/data/navigation.js` – top menu
- `src/data/footer.js` – footer links
- `src/config/site.js` – brand name, phone, email, social links
- `src/styles/variables.css` – colour palette and fonts
- `src/components/home/` – home page sections
- `src/api/products.js` – calls the backend (`/api/products`)
- `public/` – images (use `.webp` for photos), fonts, video, `llms.txt`
