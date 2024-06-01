FROM node:22.1.0-alpine 

WORKDIR /usr/src/app

RUN npm install -g npm@10.7.0

COPY package*.json ./
COPY vite.config.js ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]