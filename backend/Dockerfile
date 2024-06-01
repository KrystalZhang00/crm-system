FROM node:22.1.0-alpine

WORKDIR /usr/src/app

RUN npm install -g npm@10.7.0

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8888

CMD ["npm", "run", "dev"]