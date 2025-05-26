FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install --production && npm install serve

COPY . .

RUN npm run build
EXPOSE 3000

CMD [ "npx", "serve", "-s", "dist", "-l", "3000" ]