FROM node:13-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8080

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

CMD ["npm",  "start"]