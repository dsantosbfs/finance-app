const bcrypt = require('bcryptjs');
const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const user = require('./user-schema');

user.methods(['get', 'delete']);
user.updateOptions({ new: true, runValidators: true });

async function authenticate({ username, password }) {
  const userData = await user.findOne({ email: username });

  if (userData && bcrypt.compareSync(password, userData.hash)) {
    const { hash, ...userWithoutHash } = userData.toObject();
    const token = jwt.sign({ sub: userData.id }, config.secret);

    return {
      ...userWithoutHash,
      token
    };
  }
}

async function register(userParam) {
  const userData = new user(userParam);

  if (userParam.password) {
    userData.hash = bcrypt.hashSync(userParam.password, 10);
  }

  await userData.save();
}

async function update(id, userParam) {
  const userData = await user.findById(id);

  if (!userData) throw 'User not found';

  if (userData.email !== userParam.email && await user.findOne({ email: userParam.email })) {
    throw 'Username "' + userParam.email + '" is already taken';
  }

  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  Object.assign(userData, userParam);

  await userData.save();
}

async function getById(id) {
  return await user.findById(id).select('-hash');
}

module.exports = { user, authenticate, register, update, getById };
