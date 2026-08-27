# Luxe Interiors

React and Vite frontend with an Express/MongoDB API. The application can be run locally with Node.js or as two Docker containers.

## Docker Images

The published Docker Hub images are:

```text
sunilnd/luxe_interiors:web
sunilnd/luxe_interiors:api
```

## Pull And Run Published Images

Run these commands from any machine with Docker installed.

### 1. Pull the images

```bash
docker pull sunilnd/luxe_interiors:web
docker pull sunilnd/luxe_interiors:api
```

### 2. Create the shared network

The web container proxies `/api` requests to the API container by the hostname `api`.

```bash
docker network create luxe-interiors-net
```

If the network already exists, Docker will report an error that can be ignored.

### 3. Run the API container

```bash
docker run -d --name api --network luxe-interiors-net -p 5000:5000 -e PORT=5000 -e MONGODB_URI="your-mongodb-connection-string" sunilnd/luxe_interiors:api
```

MongoDB is required for contact form submissions. To start the API without MongoDB, omit `MONGODB_URI`; the API will still serve its health endpoint, but it will report MongoDB as disconnected.

### 4. Run the web container

```bash
docker run -d --name web --network luxe-interiors-net -p 8080:80 sunilnd/luxe_interiors:web
```

Open the application at <http://localhost:8080>.

## Verify Containers

```bash
docker ps
curl http://localhost:8080/api/health
curl http://localhost:5000/api/health
```

Expected health output without MongoDB credentials:

```json
{"ok":false,"mongo":"disconnected"}
```

## Stop And Remove Containers

```bash
docker stop web api
docker rm web api
```

Remove the network when it is no longer needed:

```bash
docker network rm luxe-interiors-net
```

## Update To A New Image

Stop and remove the old containers, pull the latest images, then run the containers again:

```bash
docker stop web api
docker rm web api
docker pull sunilnd/luxe_interiors:web
docker pull sunilnd/luxe_interiors:api
```

Run the API and web commands from the previous sections again.

## Build Images Locally

From the project root:

```bash
docker compose build
```

Build fresh images without Docker cache:

```bash
docker compose build --no-cache
```

## Tag And Push New Images

After building locally, tag and push both images to Docker Hub:

```bash
docker tag luxe-interiors-api:latest sunilnd/luxe_interiors:api
docker tag luxe-interiors-web:latest sunilnd/luxe_interiors:web

docker push sunilnd/luxe_interiors:api
docker push sunilnd/luxe_interiors:web
```

Log in first if Docker Hub requires authentication:

```bash
docker login
```

## Docker Compose

The repository also includes `docker-compose.yml`. It builds both services and publishes:

- Web: <http://localhost:8080>
- API: <http://localhost:5000>

Start the Compose stack:

```bash
docker compose up --build -d
```

Stop it:

```bash
docker compose down
```

For MongoDB-backed contact submissions, create `server/.env` from `server/.env.example` and provide `MONGODB_URI` before starting Compose.

## Local Development

Install frontend dependencies and start Vite:

```bash
npm install
npm run dev
```

Install API dependencies and start the API in a second terminal:

```bash
cd server
npm install
npm start
```

Useful checks:

```bash
npm run build
npm run lint
```
