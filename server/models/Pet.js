import mongoose from 'mongoose';

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
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);
export default Pet;
