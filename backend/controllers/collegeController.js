const College = require('../models/College');

exports.getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges); // ✅ return as array directly
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch colleges', error: err });
  }
};
