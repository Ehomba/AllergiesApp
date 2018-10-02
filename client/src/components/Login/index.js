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
                <img alt="fall nature scene" class="spring-image" src="https://static8.depositphotos.com/1001951/1021/i/450/depositphotos_10215387-stock-photo-daisy-field.jpg" />
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