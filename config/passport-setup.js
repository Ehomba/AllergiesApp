const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const models = require('../model');
const LocalStrategy = require('passport-local').Strategy;



passport.serializeUser((user, done)=>{
    console.log(user[0], "serialized")
    done(null, { id: user[0]._id})
})

passport.deserializeUser((user, done)=>{
   
    models.User.find({_id: user.id}).then((user)=>{
        console.log(user, "deserialize")
        done(null,user);
    })
})

const isValidPassword = function(user, password) {
    console.log(user, "user in is valid")
    return bcrypt.compareSync(password, user[0].password);
}
passport.use('user-login', new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done){
    models.User.find({username: username}).then(user => {
        if( !user.length > 0) {
            return done(null, false);
        }
        if(!isValidPassword(user, password)){
            return done(null, false)
        }
        
        return done(null, user);
    })
}))
passport.use('user-register',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done){
    
    models.User.find({username: username}).then((user)=>{
        
        if(user.length > 0) {
            return done(null, false);
        } else {
            console.log('---- reached else');
            bcrypt.hash(password, null, null, function(err, hash){
                console.log(req.body , "user sent from client");
                models.User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,

                }).then((user)=>{
                    console.log(user, "------ user from database")
                    return done(null, user);
                });
            });
        }
    })

}))