const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
    default: 1,
    min: 0,
  },
  category: {
    type: String,
    required: false,
    enum: ['vegetable', 'fruit', 'dairy', 'meat', 'grain', 'beverage', 'snack'],
  },
  organic: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
