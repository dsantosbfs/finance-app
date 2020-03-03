const restful = require('node-restful');
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
});

module.exports = restful.model('Users', userSchema);
