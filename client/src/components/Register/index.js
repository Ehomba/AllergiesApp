import React from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom"

class Register extends React.Component {

  state = {
    username: "",
    email:"",
    password: "",
    passwordMatch: "",
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit");
    console.log({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    });
    if (this.state.username && this.state.email) {
      console.log("asdfasdf");
      API.saveUser({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  };

    render() {
        return (

      <div className="container" id="register">
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
                  <input id="user_name" name="username" type="text" className="validate" value={this.state.username}
                  onChange={this.handleInputChange}/>
                  <label htmlFor="user_name" className="center-align">Username</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input id="user_email" name="email" type="email" className="validate" value={this.state.email}
                  onChange={this.handleInputChange}/>
                  <label htmlFor="user_email" className="center-align">Email</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input id="user_passw" name="password" type="password" className="validate" value={this.state.password}
                  onChange={this.handleInputChange}/>
                  <label htmlFor="user_passw">Password</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input id="confirm_pass" type="password" name="passwordMatch" value={this.state.passwordMatch}
                  onChange={this.handleInputChange}/>
                  <label htmlFor="confirm_pass">Re-type password</label>
                </div>
              </div>
              <div className="row center-align">
                <div className="input-field col s12">
                  <Link to="/profile" className="btn waves-effect waves-light amber accent-4  col s12" id="register-btn" disabled={!(this.state.password === this.state.passwordMatch)} onClick={this.handleFormSubmit} >Register Now</Link>
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