const bodyParser = require('body-parser');
const cors = require('./cors');
const express = require('express');
const port = 8080;
const server = express();

server.use(bodyParser.urlencoded({ extended : true }));
server.use(bodyParser.json());
server.use(cors);

server.listen(port, () => {
    console.log(`Run on port number ${port}`);
});

module.exports = server;
