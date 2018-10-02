import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div>

      <Navbar />

      <Route exact path="/" component={Login} />
      {/* <Route exact path="/profile" component={Profile} />
      <Route exact path="/journal" component={Journal} />
      <Route exact path="/settings" component={Settings} /> */}
      <Footer />
    </div>

  </Router>

);

export default App;
