const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  passwordHash: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  tokenSeed: { type: String, required: true, unique: true },
  created: { type: Date, default: () => new Date() },
});

User.create([{
  passwordHash: 'password',
  email: 'svigil@gmail.com',
  username: 'svigil',
  tokenSeed: '1',
  created: new Date(Date.now())
}, {
  passwordHash: 'word',
  email: 'dan@dan.com',
  username: 'dan',
  tokenSeed: '2',
  created: new Date(Date.now())
}])

UserSchema.pre('save', function (next) {
  if (this.isModified('passwordHash') || this.isNew) {
    bcrypt.hash(this.passwordHash, null, null, (err, hash) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      this.passwordHash = hash;
      return next();
    })
  }
})

UserSchema.methods.comparePassword = function (pass, cb) {
  bcrypt.compare(pass, this.passwordHash, function (err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
}

const User = mongoose.model('User', userSchema);

module.exports = User;
