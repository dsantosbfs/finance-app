const express = require('express');
const router = express.Router();

const userService = require('../user/user-service');

module.exports = (server) => {
  server.use('/api', router);

  userService.register(router, '/users');
};
