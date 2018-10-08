import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>

    <div>

      <Navbar />

      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />

      <Footer />

    </div>

  </Router>

);

export default App;
