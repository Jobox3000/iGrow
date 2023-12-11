const mongoose = require('mongoose');

const growSchema = new mongoose.Schema({
  ref_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  depth: {
    type: Number,
    required: true
  }
});

const Grow = mongoose.model('Grow', growSchema);
module.exports = Grow;
