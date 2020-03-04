const express = require('express');
const router = express.Router();

const userService = require('../user/user-service');

module.exports = (server) => {
  server.use('/api', router);

  router.post('/authenticate', (req, res, next) => {
    userService.authenticate(req.body)
      .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
      .catch(err => next(err));
  });

  router.post('/register', (req, res, next) => {
    userService.register(req.body)
      .then(() => res.json({ message: 'Successfully registered user'}))
      .catch(err => next(err));
  });

  router.put('/users/:id', (req, res, next) => {
    userService.update(req.params.id, req.body)
      .then(() => res.json({ message: 'User updated successfully' }))
      .catch(err => next(err));
  });

  userService.user.register(router, '/users');
};
