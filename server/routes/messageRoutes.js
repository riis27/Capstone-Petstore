import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// @POST /api/messages
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message stored successfully' });
  } catch (error) {
    console.error('Message saving error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
