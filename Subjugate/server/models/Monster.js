const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  health: {
    type: Number,
    required: true
  },
  attack: {
    type: Number,
    required: true
  },
  defense: {
    type: Number,
    required: true
  },
  isBoss: {
    type: Boolean,
    default: false
  },
  loot: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

module.exports = mongoose.model('Monster', MonsterSchema);