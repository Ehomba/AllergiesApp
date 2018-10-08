const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  animalDander: { type: Number},
  dustMites: { type: Number},
  insectStings: { type: Number},
  latex: { type: Number},
  meds: { type: Number},
  mold: { type: Number},
  peanuts: { type: Number},
  pollen: { type: Number},
  created: { type: Date, default: () => new Date() }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
