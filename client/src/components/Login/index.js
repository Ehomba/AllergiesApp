import React from 'react';
import Form from '../Form';
import { Link } from "react-router-dom";

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card horizontal">
              <div className="card-image">
                <img alt="fall nature scene" src="https://lorempixel.com/600/780/nature/6" />
              </div>
              <div className="card-stacked">
                <Form />
                <div className="card-action center">
                  <Link to="/register">Don't have an account? Register here.</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

}

export default Login;