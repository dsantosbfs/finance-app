const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(`mongodb://${process.env.MONGO_PORT_27017_TCP_ADDR}/finance-app`);
