FROM node:19

WORKDIR /home/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["node","app.js"]