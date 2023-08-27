const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  characterClass: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  experience: {
    type: Number,
    default: 0
  },
  skills: {
    type: Map,
    of: Number,
    default: {}
  },
  inventory: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  currentRegion: {
    type: Schema.Types.ObjectId,
    ref: 'Region'
  },
  guild: {
    type: Schema.Types.ObjectId,
    ref: 'Guild'
  },
  currency: {
    type: Number,
    default: 0
  },
  hairstyle: {
    type: String,
    default: 'Default'
  },
  eyeColor: {
    type: String,
    default: 'Default'
  },
  armorStyle: {
    type: String,
    default: 'Default'
  },
  weapon: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
});

module.exports = mongoose.model('User', UserSchema);