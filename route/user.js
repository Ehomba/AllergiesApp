'use strict'

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../model/User.js');
// const basicAuth = require('../lib/basic-auth-middleware.js');

router.post('/api/register', (req, res, next) => {
  console.log(req.body);
  console.log(' -------------- hit /api/signup');
  User.create(req.body)
    .then(token => {
      console.log("created user");
      res.send(token);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
})

router.post('/api/allergens', (req, res) => {
  console.log('allergens request received');
  console.log(req.body);
  User.findOneAndUpdate({ _id: mongoose.Types.ObjectId("5bbbb70962b15a4fecf7e6a7")}, req.body)
  .then(() => console.log("database updated"));
})

// router.get('/login', basicAuth, (req, res, next) => {
//   console.log('hit /api/login')

//   req.user.tokenCreate()
//   .then(token => res.send(token))
//   .catch(next)basic-auth-middleware.
// })

module.exports = router