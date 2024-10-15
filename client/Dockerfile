FROM node:22.3.0-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD [ "yarn", "run", "dev" , "--host", "0.0.0.0"]