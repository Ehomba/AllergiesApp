import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
     <Login />
    );
  }
}

export default App;
