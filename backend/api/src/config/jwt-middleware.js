'use strict';

const config = require('./config.json');
const expressJwt = require('express-jwt');
const userService = require('../user/user-service');


function jwt() {
  const secret = config.secret;

  return expressJwt({ secret, isRevoked }).unless({
    path: [
      '/api/authenticate',
      '/api/register'
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);
  
  if (!user) {
    return done(null, true);
  }
  
  done();
};

module.exports = jwt;
