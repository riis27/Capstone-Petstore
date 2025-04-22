// models/Pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  age: String,
  breed: String,
  sex: String,
  disposition: String,
  traits: String,
  image: String,
  votes: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;