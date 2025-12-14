# Base image with Node.js 22 Bookworm slim
FROM node:22.12.0-bookworm-slim AS base

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps

# Copy package files
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
# Install pnpm and dependencies (version auto-detected from packageManager field)
RUN npm install -g pnpm@10.24.0

RUN pnpm install --frozen-lockfile

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Accept build-time arguments for NEXT_PUBLIC_* variables and ENV
ARG NEXT_PUBLIC_APP_URL
ARG ENV=production
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ENV ENV=${ENV}

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm install -g pnpm@10.24.0

# Build the application with standalone output
RUN pnpm run build

# Production image
FROM base AS runner

# Set runtime environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Accept runtime variables (can be overridden by ECS task definition)
ARG ENV=production
ENV ENV=${ENV}

# Create non-root user for security
RUN addgroup --system --gid 10001 nodejs
RUN adduser --system --uid 10001 nextjs

# Copy standalone build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Create cache directory with proper permissions
RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next

# Set permissions
USER nextjs

# Expose port 3000
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Start the application
CMD ["node", "server.js"]
