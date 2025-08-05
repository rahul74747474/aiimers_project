const axios = require('axios');

exports.getLatestVideos = async (req, res) => {
  try {
    const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;

    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`;

    const response = await axios.get(apiURL);
    const videos = response.data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    res.status(200).json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ message: 'Failed to fetch videos' });
  }
};
