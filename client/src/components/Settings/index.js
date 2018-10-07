import React from 'react';
import Slide from '../Slide';

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

                                <p>Record your allergens and their severities by moving the slider to the most appropriate setting. Don't forget to save your changes!</p>

                            {/* </div>

                            <div className="card-action"> */}

                                <h5>Environmental Allergens</h5>

                                <table>

                                    <tr>
                                        <td className="allergen">Animal Dander</td>
                                        <td><Slide state={this.state} name="animalDander" handleChange={this.handleChange} /></td>
                                    </tr>

                                    <tr>
                                        <td className="allergen">Mold</td>
                                        <td><Slide state={this.state} name="mold" handleChange={this.handleChange} /></td>
                                    </tr>

                                    <tr>
                                        <td className="allergen">Pollen</td>
                                        <td><Slide state={this.state} name="pollen" handleChange={this.handleChange} /></td>
                                    </tr>
                                    
                                    <tr>
                                        <td className="allergen">Dust Mites</td>
                                        <td><Slide state={this.state} name="dustMites" handleChange={this.handleChange} /></td>
                                    </tr>
                                    
                                </table>
                            
                            {/* </div>

                            <div className="card-action"> */}

                                <h5>Ingested Allergens</h5>

                                <div className="row">
                                    <div className="col s4 allergen">Medications</div>
                                    <div className="col s8">
                                        <Slide state={this.state} name="meds" handleChange={this.handleChange} />
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