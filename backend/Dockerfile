# Backend Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install ALL dependencies (including dev dependencies for building)
RUN npm ci

# Copy source code (excluding node_modules and dist via .dockerignore)
COPY src ./src

# Build TypeScript and verify output
RUN npm run build && \
    ls -la dist && \
    test -f dist/index.js || (echo "Build failed: dist/index.js not found" && exit 1)

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install netcat for healthcheck in entrypoint
RUN apk add --no-cache netcat-openbsd

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install production dependencies
RUN npm ci --only=production

# Install ts-node and typescript for seeding
RUN npm install ts-node typescript

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Copy source files needed for seeding (models, config, seeders)
COPY --from=builder /app/src/seeders ./src/seeders
COPY --from=builder /app/src/models ./src/models
COPY --from=builder /app/src/config ./src/config
COPY --from=builder /app/src/shared ./src/shared

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose port
EXPOSE 3000

# Use entrypoint script
ENTRYPOINT ["docker-entrypoint.sh"]


