'use strict'

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// require('./src/lib/server').start();

const app = express();
const router = express.Router();

// env variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.json()
  // ,cors()
);

app.use(require('./route'));

app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userList");

// error middleware
// app.use(require('./error-middleware'));


app.listen(PORT, () =>{
  console.log(`Listening on port: ${PORT}`)
});