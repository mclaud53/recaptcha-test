FROM node:14.17.1

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "."]

EXPOSE 3000
