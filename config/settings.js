module.exports = {
    'secret': 'mernsecure'
};

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

//load the user model
var User = require('../models/user');
var settings = require('../config/settings'); // get setting file

module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secret0rKey = settings.secret;
    passport.User(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ id: jwt_payload.id }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};

// This config is used for getting user by matching JWT token with token get from the client. This configuration needs to create User model. For that, create a new Javascript file inside models folder.