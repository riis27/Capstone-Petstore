// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messageRoutes from './routes/messageRoutes.js';
import petRoutes from './routes/pets.js'; // 🐾 fixed: using pets.js not petRoutes.js

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ API Routes
app.use('/api/messages', messageRoutes); // 📬 Contact Form
app.use('/api/pets', petRoutes);         // 🐾 Pet Adoption

// ✅ Start Server
const PORT = process.env.PORT || 2727;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
