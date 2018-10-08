/* global M */
import React from 'react';
import Slide from '../Slide';
import API from '../../utils/API';

// commenting out Link until we have a need for it --mandie
// import { Link } from "react-router-dom";


class Settings extends React.Component {
    state = {
        animalDander: 0,
        dustMites: 0,
        insectStings: 0,
        latex: 0,
        meds: 0,
        mold: 0,
        peanuts: 0,
        pollen: 0,
    };
    
    componentDidMount = () => {
            const elems = document.querySelectorAll('.modal');
            M.Modal.init(elems);
    }

    handleChange = (data) => {
        const { name, value } = data;
        this.setState({
          [name]: value
        });
    };

    submitAllergens = () => {
        console.log("button clicked");
        API.saveAllergies(this.state);
    }


    render() {
        return (

            <div>

                {/* <div className="row"> */}

                    <div className="col s12 m3">

                        <div className="card blue-grey lighten-5" id="allergens">

                            <div className="card-content black-text">

                                <span className="card-title">Your Allergens</span>

                                <p className="description">Record your allergens and their severities by moving the slider to the most appropriate setting. Don't forget to save any changes!</p>

                            {/* </div>

                            <div className="card-action"> */}

                                <h5>Environmental Allergens</h5>

                                <div className="row">
                                    <div className="col s4 allergen black-text">Animal Dander</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="animalDander" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 black-text allergen">Mold</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="mold" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 black-text allergen">Pollen</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="pollen" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 black-text allergen">Dust Mites</div>
                                    <div className="col s8 black-text">
                                        <Slide state={this.state} name="dustMites" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <h5>Ingested Allergens</h5>

                                <div className="row">
                                    <div className="col s4 black-text allergen">Medications</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="meds" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s4 black-text allergen">Peanuts</div>
                                    <div className="col s8 black-text">
                                        <Slide state={this.state} name="peanuts" handleChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s12 center-align">
                                    <button onClick={this.submitAllergens} className="waves-effect waves-light btn modal-trigger blue darken-3" data-target="modal1">Save Changes</button>
                                    </div>
                                </div>

                            </div>

                        </div> {/* end of card */}

                    </div> {/* end of column */}

                {/* </div> end of row */}

                <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4 className="black-text center-align">Changes Saved!</h4>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
              </div>

            </div>
        );
    };

}



export default Settings;

