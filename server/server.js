import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messageRoutes from './routes/messageRoutes.js';
import petRoutes from './routes/petRoutes.js';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const petRoutes = require('./routes/pets');
app.use('/api/pets', petRoutes);



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use('/api/messages', messageRoutes);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`));

