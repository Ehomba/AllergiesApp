import React from 'react';
import Form from '../Form';
import { Link } from "react-router-dom";

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container" id="login-container">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card horizontal z-depth-5">
              <div className="card-image hide-on-med-and-down">
                <img alt="fall nature scene" src="https://images.unsplash.com/photo-1445962125599-30f582ac21f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38c096c472ba616dc4e8e76a8069c97a&auto=format&fit=crop&w=500&q=60.jpg" width="600px" height="750px" />
              </div>
              <div className="card-stacked">
                <div className="row center-align">
                  <div className="col s12" id="nose-icon">
                  <img alt="nose icon" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/nose.png" width="100px" height="100px" />
                  </div>
                </div>
                <Form />
                <div className="card-action center">
                  <Link to="/register">Don't have an account? Register here.</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

}

export default Login;