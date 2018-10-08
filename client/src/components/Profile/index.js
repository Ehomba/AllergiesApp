import React from 'react';
import Settings from '../Settings';
import "./Calender/Calender.css"
class Profile extends React.Component {

  render() {
    return (
      <div>
        
        <div className="row">

        <div className="col m1"></div>
       
        <Settings />


          <div className="col s12 m7">

            <div className="card transparent" id="weather">
            <iframe src="https://weather.com/forecast/allergy/l/USTX0057:1:US" id="allergy-tracker"></iframe>
              <div className="card-content white-text">
              
              </div>

              <div className="card-action">
                {/* <a href=""></a> */}
                {/* <a href="#"></a> */}
              </div>


            </div> {/* end of card */}

          </div> {/* end of column */}

          <div className="col m1"></div>

        </div> {/* end of end of row */}

      </div>
    );
  };
}

export default Profile;