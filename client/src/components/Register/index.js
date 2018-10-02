import React from 'react';

class Register extends React.Component {

    render() {
        return (

          <div className="container" id="register">

            <h4>Registration</h4>

            <div id="register-page" className="row">

              <div className="col s12 z-depth-6 card-panel">
              
                <form className="register-form">

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

                  <div className="row">
                    <div className="input-field col s12">
                      <a href="register.html" className="btn waves-effect waves-light col s12" id="register-btn">Register Now</a>
                    </div>
                    <div className="input-field col s12">
                      <p className="margin center medium-small sign-up">Already have an account?
                        <a href="login.php">Login</a>
                      </p>
                    </div>
                  </div>

                </form>

              </div> {/* end of column div */}
            </div> {/* end of column div */}
          </div> // end of container div

    );
  };

}

export default Register;