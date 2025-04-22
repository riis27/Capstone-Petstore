const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/Message');

// GET - fetch all contact messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ submittedAt: -1 }); // newest first
    res.status(200).json(messages);
  } catch (err) {
    console.error('[Get Messages Error]', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST - create a new contact message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message received successfully!' });
  } catch (err) {
    console.error('[Contact Form Error]', err);
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
});

// PATCH - update an existing message
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid message ID.' });
  }

  try {
    const updatedMessage = await Message.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedMessage) {
      return res.status(404).json({ message: 'Message not found.' });
    }

    res.status(200).json({
      message: 'Message updated successfully!',
      data: updatedMessage,
    });
  } catch (err) {
    console.error('[Update Message Error]', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
