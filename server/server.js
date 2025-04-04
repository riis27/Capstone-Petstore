import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {
 
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
