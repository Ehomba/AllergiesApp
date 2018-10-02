import React from 'react';

class Register extends React.Component {

  render() {
    return (

      <div>
      <h4>Registration</h4>
        <div id="register-page" classname="row">
          <div classname="col s12 z-depth-6 card-panel">
            <form classname="register-form">
              <div classname="row margin">
                <div classname="input-field col s12">
                  <i classname="mdi-social-person-outline prefix"></i>
                  <input id="user_name" type="text" classname="validate" />
                  <label for="user_name" classname="center-align">Username</label>
                </div>
              </div>
              <div classname="row margin">
                <div classname="input-field col s12">
                  <i classname="mdi-communication-email prefix"></i>
                  <input id="user_email" type="email" classname="validate" />
                  <label for="user_email" classname="center-align">Email</label>
                </div>
              </div>
              <div classname="row margin">
                <div classname="input-field col s12">
                  <i classname="mdi-action-lock-outline prefix"></i>
                  <input id="user_passw" type="password" classname="validate" />
                  <label for="user_passw">Password</label>
                </div>
              </div>
              <div classname="row margin">
                <div classname="input-field col s12">
                  <i classname="mdi-action-lock-outline prefix"></i>
                  <input id="confirm_pass" type="password" />
                  <label for="confirm_pass">Re-type password</label>
                </div>
              </div>
              <div classname="row">
                <div classname="input-field col s12">
                  <a href="register.html" classname="btn waves-effect waves-light col s12">Register Now</a>
                </div>
                <div classname="input-field col s12">
                  <p classname="margin center medium-small sign-up">Already have an account?
                    <a href="login.php">Login</a>
                  </p>
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