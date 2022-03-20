FROM node:15.14-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

CMD ["npm", "start"]

