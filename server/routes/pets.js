// routes/pets.js
const express = require( 'express')
const jwt = require( 'jsonwebtoken')
const Pet = require( '../models/Pet.js')

const router = express.Router();

// ✅ JWT verification middleware
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: "Token is required" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};

// ✅ POST /api/pets/add — Add new pet (PRIVATE)
router.post('/add', verifyToken, async (req, res) => {
  try {
    const { name, age, breed, sex, disposition, traits, image } = req.body;

    if (!name || !age || !breed || !sex || !disposition || !traits || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPet = new Pet({
      name,
      age,
      breed,
      sex,
      disposition,
      traits,
      image,
      votes: 0,
    });

    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (err) {
    res.status(500).json({ message: "Server error while adding pet" });
  }
});

// ✅ GET /api/pets — Fetch all pets (PUBLIC)
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find().sort({ createdAt: -1 });
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve pets" });
  }
});

// ✅ PATCH /api/pets/:id/vote — Upvote/downvote (PUBLIC)
router.patch('/:id/vote', async (req, res) => {
  const { voteType } = req.body;

  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });

    if (voteType === 'upvote') pet.votes += 1;
    else if (voteType === 'downvote') pet.votes -= 1;

    await pet.save();
    res.status(200).json({ message: "Vote updated", votes: pet.votes });
  } catch (err) {
    res.status(500).json({ message: "Error updating vote", error: err });
  }
});

export default router;
