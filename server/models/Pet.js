const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  age: String,
  breed: String,
  sex: String,
  disposition: String,
  traits: String,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  votes: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);
