#!/bin/bash
git pull
docker ps -q --filter ancestor="blog-app:v1" | xargs -r docker stop
docker system prune --force
docker build -t blog-app:v1 .
docker run -d --name blog-app -it -p 3000:3000 blog-app:v1
