'use strict';

const bodyParser = require('body-parser');
const cors = require('./cors');
const errorHandler = require('./error-handler.middleware');
const express = require('express');
const jwt = require('./jwt.middleware');
const port = 8080;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended : true }));
server.use(cors);
server.use(jwt());
server.use(errorHandler);

server.listen(port, () => {
  console.log(`Run on port number ${port}`);
});

module.exports = server;
