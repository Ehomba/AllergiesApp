import React from 'react';

class Register extends React.Component {

    render() {
        return (

      <div classname="container" id="register">
        <h4>Registration</h4>
        <div id="register-page" className="row">
          <div className="col s12 z-depth-6 card-panel">
            <form className="register-form">
            <div className="row center-align">
                  <div className="col s12" id="nose-icon2">
                  <img alt="nose icon" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/nose.png" width="50px" height="50px" />
                  </div>
                </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="user_name" type="text" className="validate" />
                  <label htmlFor="user_name" className="center-align">Username</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input id="user_email" type="email" className="validate" />
                  <label htmlFor="user_email" className="center-align">Email</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input id="user_passw" type="password" className="validate" />
                  <label htmlFor="user_passw">Password</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input id="confirm_pass" type="password" />
                  <label htmlFor="confirm_pass">Re-type password</label>
                </div>
              </div>
              <div className="row center-align">
                <div className="input-field col s12">
                  <a href="#" className="btn waves-effect waves-light amber accent-4 hoverable col s6" id="register-btn">Register Now</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  };

}

export default Register;