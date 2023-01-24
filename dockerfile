# Step 1: Build the app in image 'builder'
FROM node:latest AS builder

WORKDIR /app
COPY . .
ARG configuration=production
#s build app as a for production
RUN npm install && npm run build.prod

# Step 2: Use build output from 'builder'
FROM nginx:latest
LABEL version="1.0"

COPY /nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/blog-app .
