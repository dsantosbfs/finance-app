FROM node:latest

RUN mkdir -p /usr/src/api
RUN npm install nodemon -g

WORKDIR /usr/src/api
COPY api/package.json /usr/src/api/package.json
RUN npm install -g

EXPOSE 8080
EXPOSE 5858

CMD ["npm", "start"]
