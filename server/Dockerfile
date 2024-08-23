FROM node:22.3-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

RUN node ./seed.js

EXPOSE 5000

CMD [ "yarn", "start"]