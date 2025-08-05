const express = require('express');
const router = express.Router();
const { getLatestVideos } = require('../controllers/youtubeController');

router.get('/videos', getLatestVideos);

module.exports = router;
