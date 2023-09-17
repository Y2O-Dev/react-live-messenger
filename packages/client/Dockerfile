FROM node:alpine as deps
WORKDIR /app
COPY package.json ./
RUN mkdir -p packages/common packages/app
COPY ./packages/common ./packages/common
COPY ./packages/client ./packages/client
RUN yarn install
EXPOSE 4005
CMD ["yarn", "start"]