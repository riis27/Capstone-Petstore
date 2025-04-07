//models/Newsletter.js

import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

export default Newsletter;
