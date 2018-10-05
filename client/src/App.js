import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import './App.css';
import Settings from './components/Settings';
import Profile from './components/Profile';
const App = () => (
  <Router>

    <div>

      <Navbar />

      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
      {/* <Route exact path="/journal" component={Journal} /> */}

      <Footer />

    </div>

  </Router>

);

export default App;
