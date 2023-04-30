FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /nextjs-cafe

COPY package.json package-lock.json ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder

ARG SERVER_URL="api"
ENV NEXT_PUBLIC_SITE_URL=$SERVER_URL


WORKDIR /nextjs-cafe

COPY --from=deps /nextjs-cafe/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /nextjs-cafe

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 cafegroup
RUN adduser --system --uid 1001 cafeuser

COPY --from=builder /nextjs-cafe/public ./public


# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=cafeuser:cafegroup /nextjs-cafe/.next/standalone ./
COPY --from=builder --chown=cafeuser:cafegroup /nextjs-cafe/.next/static ./.next/static

USER cafeuser

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]

