const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: String,
  location: String,
  courses: String,
  grade: String,
  image: {
  public_id: String,
  url: String
},
fees: String,
  seats : String,
  established: String,
});

module.exports = mongoose.model('College', collegeSchema);
