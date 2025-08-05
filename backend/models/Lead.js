const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  course: String,
  location: String, // renamed from location
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Lead', leadSchema);
