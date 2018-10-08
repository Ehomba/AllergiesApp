import React from 'react';
import { Link } from "react-router-dom";

const Navbar = props => (

<div className="container">

    <nav className="navbar">

        <div className="nav-wrapper">

            <Link className="brand-logo black-text" to="/">Nose News</Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">

                {/* The following link will be to the user's profile, which lists their active allergies and severity, and gives a daily report of environmental allergens. */}
                <li><Link to="/profile" className="black-text">The Daily</Link></li>

                

                <li><Link to="/" className="black-text">Log Out</Link></li>
                
            </ul>

        </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
        <li><Link to="/profile">The Daily</Link></li>
        
        
        <li><Link to="/">Log Out</Link></li>
    </ul>

</div>

);

export default Navbar;