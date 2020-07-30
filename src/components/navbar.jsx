import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (<nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <h2 className="navbar-brand">Vidly App</h2>
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/movies" className="nav-link">Movies</Link>
            </li>
        </ul>
    </nav>);
}

export default NavBar;