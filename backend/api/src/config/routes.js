const express = require('express');
const router = express.Router();

module.exports = (server) => {
  server.use('/api', router);
};
