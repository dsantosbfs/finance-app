const user = require('./user-schema');

user.methods(['get', 'post', 'put', 'delete']);
user.updateOptions({ new: true, runValidators: true });

module.exports = user;
