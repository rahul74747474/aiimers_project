const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: String,
  course: String,
  image: {
  public_id: String,
  url: String
},  // can be emoji or image URL
  quote: String,
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
