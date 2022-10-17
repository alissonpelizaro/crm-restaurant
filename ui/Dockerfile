#1 Building APP 
FROM node:17-alpine

RUN mkdir -p /usr/src
WORKDIR /app
RUN mkdir -p /app/node_modules
RUN chown node:node /app/node_modules

COPY package.json .
COPY package-lock.json .

RUN npm install -legacy-peer-deps
COPY . .

EXPOSE 3000

CMD ["npm", "start"]