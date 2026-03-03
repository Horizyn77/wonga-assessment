#!/bin/bash

echo "Cleaning Docker cache..."

docker compose down -v
docker builder prune -f

echo "Building and starting services..."

docker compose up --build