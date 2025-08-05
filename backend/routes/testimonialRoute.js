const express = require('express');
const router = express.Router();
const Testimonial = require('../models/testimonials'); // adjust path as needed

// GET /api/testimonials
router.get('/', async (req, res) => {
  try {
    console.log("trying..")
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching testimonials' });
  }
});

module.exports = router; // ✅ MUST export the router
