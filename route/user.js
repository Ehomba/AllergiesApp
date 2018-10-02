'use strict'

const express = require('express');
const router = express.Router();
import bodyParser from 'body-parser';

import basicAuth from '../lib/basic-auth-middleware.js'
import User from '../model/user.js';
import { builtinModules } from 'module';



router.post('/signup', jsonParser, (req, res, next) => {
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