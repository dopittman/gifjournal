const mongoose = require('mongoose');

const { Schema } = mongoose;

const LogSchema = new Schema({

  gif: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Log = mongoose.model('logs', LogSchema);

module.exports = Log;
