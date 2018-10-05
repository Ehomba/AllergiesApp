'use strict'

const express = require('express');
const router = express.Router();
const User = require('../model/User.js');
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

// router.get('/login', basicAuth, (req, res, next) => {
//   console.log('hit /api/login')

//   req.user.tokenCreate()
//   .then(token => res.send(token))
//   .catch(next)basic-auth-middleware.
// })

module.exports = router