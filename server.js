'use strict'

//asdfasdfasdfasdfasdf

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./route/user.js');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
// require('./src/lib/server').start();

const app = express();
// const router = express.Router();
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["miles"]
}))

app.use(passport.initialize());
app.use(passport.session());

// env variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  //useCreateIndex: true,
  useNewUrlParser: true
});
//SR Corrected^^

app.use(bodyParser.json()
  // ,cors()
);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + '/client/build/')));
}
else {
  app.use(express.static(path.join(__dirname + '/client/public/')));
}

app.use(apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userList");

// error middleware
// app.use(require('./error-middleware'));


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});