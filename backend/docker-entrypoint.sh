#!/bin/sh
set -e

echo "⏳ Waiting for database to be ready..."

# Wait for database to be ready
until nc -z postgres 5432; do
  echo "Waiting for postgres..."
  sleep 2
done

echo "✅ Database is ready!"

# Run database seeding
echo "🌱 Seeding database..."
npm run db:seed || echo "⚠️  Seeding failed or already completed"

# Start server based on environment
if [ "$NODE_ENV" = "development" ]; then
  echo "🚀 Starting development server with hot reload..."
  exec npm run dev
else
  echo "🚀 Starting production server..."
  exec npm start
fi
