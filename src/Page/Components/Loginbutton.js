import React from "react";
import AuthService from "../../Services/authservice";
import UserService from "../../Services/userservice";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
function Loginbutton({islogin,currentUser}){
    const navigate = useNavigate();
    
    const handleSubmitLogout = async() =>{
        await UserService.updateUserscore(currentUser.username,AuthService.getCurrentUser().highscore);
        AuthService.logout();
        navigate("/");
        window.location.reload(false);
    }

    return(
        (!islogin) ? 
        (<button className="loginbutton">
            <Link to="/Login" className="loginlink">Log-in</Link>
        </button>)
        : 
        (<button className="loginbutton" onClick={handleSubmitLogout}>
            <Link to="/" className="loginlink">Log-out</Link>
        </button>)
        
    );
}
export default Loginbutton;