import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Form extends React.Component{

  constructor(props){
   super(props)
    this.state = {
      username: "",
      password: ""
    }
  }
  handleUserName(event){
    this.setState({
      username: event.target.value
    })
  }
  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }
  submit(){
    axios.post('/login', this.state).then(res =>{
      console.log(res, "this is the response");
    });
  }

  render(){
    return(
      <div className="card-content">
      <div className="row center-align">
        <div className="input-field col s12 center-align" id="input-username">
          <input onChange={this.handleUserName.bind(this)} id="username" type="text" className="validate" />
          <label htmlFor="username">Username</label>
        </div>
      </div>
      <div className="row center-align">
        <div className="input-field col s12 center-align" id="input-password">
          <input onChange={this.handlePassword.bind(this)} id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row center-align">
        <button onClick={this.submit.bind(this)} className="btn waves-effect waves-light amber accent-4" id="login-button" type="submit" name="action">
          <Link to="/profile">Login</Link>
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
    )
  }

}

export default Form; 