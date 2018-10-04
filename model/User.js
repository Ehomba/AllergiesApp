const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  created: { type: Date, default: () => new Date() },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
