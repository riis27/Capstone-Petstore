const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// POST /api/newsletter
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  try {
    const emailFormatted = email.toLowerCase().trim();
    const existing = await Newsletter.findOne({ email: emailFormatted });
    
    if (existing) {
      return res.status(409).json({ message: 'This email is already subscribed.' });
    }

    const newEntry = new Newsletter({ email: emailFormatted });
    await newEntry.save();

    return res.status(201).json({ message: 'Thank you for subscribing!' });
  } catch (err) {
    console.error('[Newsletter POST Error]', err);
    // Enhanced Error Feedback
    return res.status(500).json({ 
      message: 'Server error: could not subscribe user.', 
      error: err.message 
    });
  }
});

module.exports = router;
