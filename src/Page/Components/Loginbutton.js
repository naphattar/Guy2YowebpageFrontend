import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
function Loginbutton(){
    return(
        <button className="loginbutton">
            <Link to="/Login" className="loginlink">Log-in</Link>
        </button>
    );
}
export default Loginbutton;