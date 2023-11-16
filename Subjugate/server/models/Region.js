const mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  terrain: {
    type: String,
    required: true
  },
  difficultyLevel: {
    type: Number,
    required: true
  },
  safeHaven: {
    type: Boolean,
    default: false
  },
  monsters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster'
  }]
});

module.exports = mongoose.model('Region', RegionSchema);