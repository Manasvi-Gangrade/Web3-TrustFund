import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Web3 TrustFund</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/funds">Funds</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
