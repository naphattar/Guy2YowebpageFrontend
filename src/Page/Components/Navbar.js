import React,{useEffect, useState} from "react";
import AuthService from "../../Services/authservice";
import {Link} from 'react-router-dom';
import NavItems from "./NavItems";
import "./Navbar.css"
import Loginbutton from "./Loginbutton";
function Navbar(){
    const currentUser = AuthService.getCurrentUser();
    const [isLogin,setIsLogin] = useState(false);
    useEffect(() => {
        console.log(currentUser);
        if(currentUser != null){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    });
    return(
        <nav className="nav">
            <p className="nav_brand">
                GUY2YO
            </p>
            <ul className="nav_list">
                <NavItems tolink="/" name="Home"></NavItems>
                <NavItems tolink="/about" name="About Guy"></NavItems>
                <NavItems tolink="/popguy" name="Play Pop guy"></NavItems>
                <NavItems tolink="/dashboard" name="Leaderboard"></NavItems>
            </ul>
            <Loginbutton islogin ={isLogin}></Loginbutton>
        </nav>
        
    );
}
export default Navbar;