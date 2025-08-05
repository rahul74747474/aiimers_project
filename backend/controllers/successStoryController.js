const SuccessStory = require('../models/SuccessStory');

exports.getStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch success stories' });
  }
};