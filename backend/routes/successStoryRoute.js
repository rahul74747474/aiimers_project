const express = require('express');
const router = express.Router();
const { getStories } = require('../controllers/successStoryController');

router.get('/', getStories);

module.exports = router;
