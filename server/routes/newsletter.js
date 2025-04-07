//newsletter.js
import express from "express";
import Newsletter from "../models/Newsletter.js"; // define schema separately
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const newEntry = new Newsletter({ email });
    await newEntry.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error subscribing", error: err.message });
  }
});

export default router;
