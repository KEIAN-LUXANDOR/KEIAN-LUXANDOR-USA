# Keian Luxandor — Database

PostgreSQL 17, run on your computer with Docker.

| File | What it is |
|---|---|
| `docker-compose.yml` | Starts the database (`keian`, user `keian`) on port 5432 |
| `schema.sql` | The tables, for reference. The backend creates them automatically when it starts. |
| `seed-data.sql` | The 6 sample products, if you ever want to add them by hand. The backend also adds them automatically when the table is empty. |

## Start and stop

Open Docker Desktop first, then in this folder:

```
docker compose up -d     # start
docker compose down      # stop (your data is kept)
```

## Look inside the database

```
docker exec -it keian-db psql -U keian -d keian
```
Then for example: `select id, name, price from products;` and `\q` to leave.

The password in `docker-compose.yml` is for your computer only. The live site uses its own password, stored safely on the server (never in GitHub).
