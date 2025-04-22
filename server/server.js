// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const messageRoutes = require('./routes/messages.js');
const petRoutes = require('./routes/pets.js');
const authRoutes = require('./routes/authRoutes.js');
const newsletterRoutes = require('./routes/newsletter.js');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI not found in .env');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/pets', petRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/newsletter', newsletterRoutes);

// 404 
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('🔥 Unhandled Error:', err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

const PORT = process.env.PORT || 2727;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});