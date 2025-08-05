const express = require('express');
const router = express.Router();
const College = require('../models/College');

// GET /api/colleges
router.get('/', async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch colleges", error: err });
  }
});

module.exports = router;
