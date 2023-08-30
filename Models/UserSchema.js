const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    
  },
  
  password: {
    type: String,
    required: true,
  }
});

// Create the User model based on the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;
