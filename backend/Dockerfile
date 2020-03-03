FROM node:latest

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api
COPY api/package.json /usr/src/api/package.json
RUN npm install -g

EXPOSE 8080
EXPOSE 5858

CMD ["npm", "start"]
