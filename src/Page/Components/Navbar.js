import React,{useState} from "react";
import {Link} from 'react-router-dom';
import NavItems from "./NavItems";
import "./Navbar.css"
import Loginbutton from "./Loginbutton";
function Navbar(){
    return(
        <nav className="nav">
            <p className="nav_brand">
                GUY2YO
            </p>
            <ul className="nav_list">
                <NavItems tolink="/" name="Home"></NavItems>
                <NavItems tolink="/about" name="About Guy"></NavItems>
                <NavItems tolink="/popguy" name="Play Pop guy"></NavItems>
            </ul>
            <Loginbutton></Loginbutton>
        </nav>
        
    );
}
export default Navbar;