'use strict'

const express = require('express');
const router = express.Router();
const User = require('../model/user.js');
// const basicAuth = require('../lib/basic-auth-middleware.js');

router.post('/api/register', (req, res, next) => {
  console.log(' -------------- hit /api/signup')

  User.create(req.body)
    .then(token => {
      console.log("created user");
      res.send(token);
    })
    .catch(next)
})

router.post("/api/login", passport.authenticate("local"), function(req, res) {
  console.log("---------------cb for POST /api/login-----------");
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json("/profile");
});

// router.get('/login', basicAuth, (req, res, next) => {
//   console.log('hit /api/login')

//   req.user.tokenCreate()
//   .then(token => res.send(token))
//   .catch(next)basic-auth-middleware.
// })

module.exports = router