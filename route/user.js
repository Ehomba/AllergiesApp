'use strict'

const express = require('express');
const router = express.Router();
const User = require('../model/user.js');
const basicAuth = require('../lib/basic-auth-middleware.js');






router.post('/signup',  (req, res, next) => {
  console.log('hit /api/signup')

  User.create(req.body)
  .then(token => res.send(token))
  .catch(next)
})

router.get('/login', basicAuth, (req, res, next) => {
  console.log('hit /api/login')

  req.user.tokenCreate()
  .then(token => res.send(token))
  .catch(next)
})

module.exports = router