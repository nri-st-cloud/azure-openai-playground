FROM node:18.16.0-bullseye-slim

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn install --frozen-lockfile && yarn cache clean

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
