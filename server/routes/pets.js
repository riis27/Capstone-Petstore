// routes/pets.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const jwt = require('jsonwebtoken');

// JWT verification middleware
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send("Token is required");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    req.user = decoded;
    next();
  });
};

// POST /api/pets/add
router.post('/add', verifyToken, async (req, res) => {
  try {
    const { name, age, breed, sex, disposition, traits, image } = req.body;
    const newPet = new Pet({
      name, age, breed, sex, disposition, traits, image, user: req.user.id,
      votes: 0 // optional default here
    });
    await newPet.save();
    res.status(201).send('Pet added successfully');
  } catch (err) {
    res.status(400).send('Error adding pet');
  }
});

// GET /api/pets — get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find().sort({ createdAt: -1 });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve pets' });
  }
});

// PATCH /api/pets/:id/vote — vote up or down
router.patch('/:id/vote', async (req, res) => {
  const { voteType } = req.body;

  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    if (voteType === 'upvote') pet.votes += 1;
    else if (voteType === 'downvote') pet.votes -= 1;

    await pet.save();
    res.status(200).json({ message: 'Vote updated', votes: pet.votes });
  } catch (err) {
    res.status(500).json({ message: 'Error updating vote', error: err });
  }
});

module.exports = router;
