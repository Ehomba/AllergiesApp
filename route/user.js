'use strict'

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../model/User.js');
const passport = require('passport');
// const basicAuth = require('../lib/basic-auth-middleware.js');

router.post('/api/register', (req, res, next) => {
  passport.authenticate('user-register',(err, user, info)=>{
    if(err){ return next(err)}
    if(!user){return res.json({user: false})}
    req.logIn(user, function(err){
      if(err){return next(err)}
      return res.json({user: true})
    });
  })(req, res, next)

  
})

router.post('/api/allergens', (req, res) => {
  console.log('allergens request received');
  console.log(req.user[0], "----- in alllergies");
  const currentUserId = req.user[0]._id;
  debugger;
  User.findOneAndUpdate({ _id: currentUserId}, req.body)
  .then(() => console.log("database updated"));
})

router.post('/login',  (req, res, next) => {
  passport.authenticate('user-login',(err,user, info)=>{
    if (err) { return next(err)}
    if(!user) {return res.json({auth: false});}
    req.logIn(user, function(err){
      console.log("in req Login ----------")
      if(err) {return next(err)}
      console.log(user, "user in req login")
       res.json({isUser: true, user: user});
    })
  })(req,res, next);
})

module.exports = router