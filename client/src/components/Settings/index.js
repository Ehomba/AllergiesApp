import React from 'react';
import Slide from './components/Slide';
import { Link } from "react-router-dom";


class Settings extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s6">Mold</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s6">Pollen</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s6">Cedar</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>

                <div className="row">
                    <div className="col s6">Dust Mites</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>
            
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <Link href="#">This is a link</Link>
                            <Link href="#">This is a link</Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
      };

}


    
export default Settings;