FROM node:24 AS dev
WORKDIR /usr/src/app
COPY . .
RUN npm ci

# Testing stage
FROM dev AS test
ENV CI=true
RUN npm test

# Build stage if tests pass
FROM test AS build-stage
ENV VITE_BACKEND_URL=/api
RUN npm run build

# Serve stage
FROM nginx:1.29-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html