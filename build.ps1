Write-Host "Cleaning Docker cache..."

docker compose down -v
docker builder prune -f

Write-Host "Building and starting services..."

docker compose up --build