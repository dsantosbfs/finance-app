'use strict';

const entries = require('./entries-schema');

entries.methods(['get', 'post', 'put', 'delete']);
entries.updateOptions({ new: true, runValidators: true });

module.exports = entries;
