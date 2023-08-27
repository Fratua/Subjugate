const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['weapon', 'armor', 'potion', 'misc'],
    required: true
  },
  stats: {
    attack: {
      type: Number,
      default: 0
    },
    defense: {
      type: Number,
      default: 0
    },
    health: {
      type: Number,
      default: 0
    }
  },
  price: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Item', ItemSchema);