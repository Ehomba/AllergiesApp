import React from 'react';
import Form from '../Form';

class Main extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

   
      render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col s12 m12 l12">
                <h2 className="header">Nosenews</h2>
                <div className="card horizontal">
                  <div className="card-image">
                    <img src="https://lorempixel.com/600/780/nature/6" />
                  </div>
                  <div className="card-stacked">
                    <Form />
                    <div className="card-action center">
                      <a href="#">Don't have an account? Register here.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
    }

    export default Main;





    /* 
                   
                    
    */