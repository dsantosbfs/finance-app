const restful = require('node-restful');
const mongoose = restful.mongoose;

const tagSchema = mongoose.Schema({
  name: String
});

const entriesSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  credit: { type: Boolean, require: true },
  description: { type: String, require: true },
  value: { type: Number, require: true },
  date: { type: Date, default: Date.now },
  tags: [ tagSchema ]
});

module.exports = restful.model('Entries', entriesSchema);
