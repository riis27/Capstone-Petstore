import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Use bcryptjs for consistency and compatibility
import User from '../models/User.js';

const router = express.Router();

// ✅ Register Route (Create Admin or Regular User)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User registered', user: savedUser });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});

// ✅ Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
});

export default router;
