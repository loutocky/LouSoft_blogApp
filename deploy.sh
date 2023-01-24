#!/bin/bash
git pull
docker ps -q --filter ancestor="blogApp:v1" | xargs -r docker stop
docker system prune --force
docker build -t blogApp:v1 .
docker run -d --name blogApp -it -p 6000:6000 blogApp:v1
