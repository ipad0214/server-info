FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist/* ./

EXPOSE 4713

CMD ["node", "main.js"]