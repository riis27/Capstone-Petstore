const express = require("express");
const jwt = require("jsonwebtoken");
const Pet = require("../models/Pet");

const router = express.Router();

// ✅ JWT verification middleware
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

// ✅ GET /api/pets — Fetch all pets (public)
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find().sort({ createdAt: -1 });
    res.status(200).json(pets);
  } catch (err) {
    console.error("Fetch Pets Error:", err.message);
    res.status(500).json({ message: "Failed to retrieve pets", error: err.message });
  }
});

// ✅ POST /api/pets — Add a pet (private/admin)
router.post("/", verifyToken, async (req, res) => {
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
      votes: 0
    });

    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (err) {
    console.error("Add Pet Error:", err.message);
    res.status(500).json({ message: "Server error while adding pet", error: err.message });
  }
});

// ✅ PATCH /api/pets/:id/vote — Upvote or downvote
router.patch("/:id/vote", async (req, res) => {
  const { voteType } = req.body;

  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    if (voteType === "upvote") pet.votes += 1;
    else if (voteType === "downvote") pet.votes -= 1;

    await pet.save();
    res.status(200).json({ message: "Vote updated", votes: pet.votes });
  } catch (err) {
    console.error("Vote Error:", err.message);
    res.status(500).json({ message: "Error updating vote", error: err.message });
  }
});

// ✅ PATCH /api/pets/:id — Update pet details
router.patch("/:id", async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json(updatedPet);
  } catch (err) {
    console.error("Update Pet Error:", err.message);
    res.status(500).json({ message: "Error updating pet", error: err.message });
  }
});

// ✅ DELETE /api/pets/:id — Remove a pet
router.delete("/:id", async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err.message);
    res.status(500).json({ message: "Error deleting pet", error: err.message });
  }
});

module.exports = router;
