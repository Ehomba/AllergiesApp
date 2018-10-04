import React from 'react';
import Slide from '../Slide';
import { Link } from "react-router-dom";


class Settings extends React.Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col s6 offset-s6">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="severity">No Reaction</td>
                                    <td className="severity">Mild</td>
                                    <td className="severity">Moderate</td>
                                    <td className="severity">Life-Threatening</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col s6 allergen">Mold</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>

                <div className="row">
                    <div className="col s6 allergen">Pollen</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>

                <div className="row">
                    <div className="col s6 allergen">Cedar</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>

                <div className="row">
                    <div className="col s6 allergen">Dust Mites</div>
                    <div className="col s6">
                        <Slide />
                    </div>
                </div>



                <div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="">This is a link</Link>
                                <Link to="">This is a link</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    };

}



export default Settings;