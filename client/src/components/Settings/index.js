import React from 'react';
import Slide from '../Slide';

// commenting out Link until we have a need for it --mandie
// import { Link } from "react-router-dom";


class Settings extends React.Component {
    state = {
        pollen: 0,
        dustMites: 0,
        cedar: 0,
        peanuts: 0,
        mold: 0
    };

    handleChange = (data) => {
        const { name, value } = data;
        this.setState({
          [name]: value
        });
    };

    render() {
        return (

            <div>

                <div className="row">

                    <div className="col s12 m6">

                        <div className="card blue-grey darken-1">

                            <div className="card-content white-text">

                                <span className="card-title">Your Allergens</span>

                                <p>Record your allergens and their severities by moving the slider to the most appropriate setting. Don't forget to save any changes!</p>

                            </div>

                            <div className="card-action">

                                <div className="row">
                                    <div className="col s4 allergen">Mold</div>
                                    <div className="col s8">
                                        <Slide name="mold" state={this.state} handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 allergen">Pollen</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="pollen" handleChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 allergen">Cedar</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="cedar" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 allergen">Dust Mites</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="dustMites" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 allergen">Peanuts</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="peanuts" handleChange={this.handleChange} />
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