# syntax=docker/dockerfile:1
FROM node:18 AS builder
# ビルドには devDependencies もインストールする必要があるため
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build:back


FROM node:18 AS runner
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
# NODE_ENV=productionにしてyarn install(npm install)するとdevDependenciesがインストールされません
RUN yarn install
CMD ["yarn", "start:back"]