import React from "react";

const Form = props => (
    <div className="card-content">
    <div className="row center-align">
      <div className="input-field col s12 center-align" id="input-username">
        <input id="email" type="email" className="validate" />
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
      <button className="btn waves-effect waves-light amber accent-4" id="login-button" type="submit" name="action">Login
        <i className="material-icons right">send</i>
      </button>
    </div>
  </div>
);

export default Form; 