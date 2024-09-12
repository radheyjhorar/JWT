
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: 'string',
    unique: true,
    required: true
  },
  password: {
    type:'string',
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);