import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form class="form-horizontal" action='' method="POST">
          <fieldset>
            <div id="legend">
              <legend class="">Login</legend>
            </div>

            <div class="control-group">
              <label class="control-label" for="username">Username</label>
              <div class="controls">
                <input type="text" id="username" name="username" placeholder="" class="input-xlarge" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label" for="password">Password</label>
              <div class="controls">
                <input type="password" id="password" name="password" placeholder="" class="input-xlarge" />
              </div>

            </div>
            <div class="control-group"></div>
            <div class="controls">
              <button class="btn btn-success">Login</button>
            </div>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
