import React from 'react';
import { Link } from "react-router-dom";

class Profile extends React.Component {

  render() {
      return (
    
        <div>

          <div className="row">

            <div className="col s12">
            
              <div className="card blue-grey darken-1">

                <div className="card-content white-text">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>

                <div className="card-action">
                  <Link to="">This is a link</Link>
                  <Link to="">This is a link</Link>
                </div>

              </div> {/* end of card */}

            </div> {/* end of column */}

          </div> {/* end of end of row */}

        </div>
    );
  };
}

export default Profile;