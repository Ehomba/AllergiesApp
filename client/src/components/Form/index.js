import React from "react";
import { Link } from "react-router-dom";

const Form = props => (
    <div className="card-content">
    <div className="row center-align">
      <div className="input-field col s12 center-align" id="input-username">
        <input id="username" type="text" className="validate" />
        <label htmlFor="username">Username</label>
      </div>
    </div>
    <div className="row center-align">
      <div className="input-field col s12 center-align" id="input-password">
        <input id="password" type="password" className="validate" />
        <label htmlFor="password">Password</label>
      </div>
    </div>
    <div className="row center-align">
      <button className="btn waves-effect waves-light amber accent-4" id="login-button" type="submit" name="action">
        <Link to="/profile">Login</Link>
        <i className="material-icons right">send</i>
      </button>
    </div>
  </div>
);

export default Form; 