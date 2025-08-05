const mongoose = require('mongoose');

const SuccessStorySchema = new mongoose.Schema({
  name: String,
  course: String,
  college: String,
 image: {
  public_id: String,
  url: String
},
  quote: String,
  year: String,
  score: String,
  category: String
});

module.exports = mongoose.model('SuccessStory', SuccessStorySchema);