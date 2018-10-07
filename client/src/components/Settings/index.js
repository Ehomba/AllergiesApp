import React from 'react';
import Slide from '../Slide';

// commenting out Link until we have a need for it --mandie
// import { Link } from "react-router-dom";


class Settings extends React.Component {

    render() {
        return (

            <div>

                <div className="row">

                    <div className="col s12 m4">

                        <div className="card blue-grey darken-1">

                            <div className="card-content white-text">

                                <span className="card-title">Allergies</span>

                                <p>Log your allergies and their severity, from mild, to moderate, to life-threatening.</p>

                            </div>

                            <div className="card-action">

                                <div className="row">
                                    <div className="col s6 allergen">Mold</div>
                                    <div className="col s6">
                                        <Slide name="Mold" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s6 allergen">Pollen</div>
                                    <div className="col s6">
                                        <Slide name="Pollen" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s6 allergen">Cedar</div>
                                    <div className="col s6">
                                        <Slide name="Cedar" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s6 allergen">Dust Mites</div>
                                    <div className="col s6">
                                        <Slide name="Dust Mites" />
                                    </div>
                                </div>

                            </div>

                        </div> {/* end of card */}

                    </div> {/* end of column */}

                </div> {/* end of row */}

            </div>
        );
    };

}



export default Settings;