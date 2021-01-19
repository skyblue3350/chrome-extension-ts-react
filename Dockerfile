FROM node:12.10-slim

RUN apt update && apt install -y zip

COPY package.json .
COPY package-lock.json .

RUN npm install
