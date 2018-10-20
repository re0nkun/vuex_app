FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install -g vue-cli
# RUN yarn global add @vue/cli

ENV HOST 0.0.0.0
EXPOSE 8080