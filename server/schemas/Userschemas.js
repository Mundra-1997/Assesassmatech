const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  profilePicture: String, // This will store the file path of the uploaded profile picture
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type:Number
  },
  jobTitle: String,
  department: String,
  location: String,
  shortBio: String,
});

module.exports = mongoose.model('User', userSchema);
