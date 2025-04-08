// server.js
const express =require('express');
const cors =require('cors');
const mongoose =require('mongoose');
const dotenv =require('dotenv');

const messageRoutes =require('./routes/messageRoutes.js');
const petRoutes =require('./routes/pets.js');
const authRoutes =require('./routes/authRoutes.js');

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Check for MONGO_URI
if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI not found in .env');
  process.exit(1);
}

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1); // ⛔ Crash only if DB cannot connect
});

// ✅ API Routes
app.use('/api/messages', messageRoutes); // 📬 Contact Form
app.use('/pets', petRoutes);         // 🐾 Pet Adoption
app.use('/api', authRoutes);             // 🔐 Auth

// ✅ Fallback route for 404
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error('🔥 Unhandled Error:', err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

// ✅ Start Server
const PORT = process.env.PORT || 2727;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
