FROM node:22-alpine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]