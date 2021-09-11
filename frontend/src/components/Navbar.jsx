import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return <nav className="navbar bg-dark container">
        <h4><NavLink exact className="link" to="/" activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}>Home</NavLink></h4>
        <h4><NavLink className="link" to="/notes" activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}>Notes</NavLink></h4>
        <h4><NavLink className="link" to="/create" activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}>Create Note</NavLink></h4>
    </nav>;
}

export default Navbar;