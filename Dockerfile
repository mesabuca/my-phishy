FROM node:alpine as base

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf node_modules && npm install

COPY . .

CMD ["npm", "run", "serve"]