import React from 'react';
import { Link } from "react-router-dom";

const Navbar = props => (

    <nav className="navbar">
        <div className="nav-wrapper">

            <Link className="brand-logo" to="/">Nose News</Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">

                {/* The following link will be to the user's profile, which lists their active allergies and severity, and gives a daily report of environmental allergens. */}
                <li><Link to="/profile">The Daily</Link></li>

                {/* This is a placeholder for an icebox item, a daily journal that allows the user to write up their symptoms and suspected allergen exposure(s), and captures the day's environmental allergen levels. */}
                <li><Link to="/journal">Journal</Link></li>

                {/* A page for the user to change their allergy information and any other settings we add in. */}
                <li><Link to="/settings">Settings</Link></li>

                <li><Link to="/">Log Out</Link></li>
                
            </ul>

        </div>
    </nav>

);

export default Navbar;