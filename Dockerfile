FROM node:14.16

WORKDIR /usr/front

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "run", "start"]
