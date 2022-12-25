import React, { useState } from "react";
import axios from "axios";
import "./Registerpage.css"
import "../Login/Loginpage.css"
function RegisterPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const uservalues = {
            username: username,
            password: password,
        };
        console.log(uservalues);
        try {
            const response = await axios.post('http://localhost:3001/register', uservalues);
        } catch (err) {
            console.error("Error: ", err.message);
        }
    };
    return(
        <div>
             <div className="Pagebody">
                <div className="loginformcontainer">
                    
                    <div className="signupcontainer">
                    <h1>Sign Up</h1>
                        <form className="signinform">
                            <input 
                            type="text" 
                            placeholder="Username" 
                            onChange = {(event) =>{setUsername(event.target.value)}}></input>
                            <input 
                            type="text" 
                            placeholder="Password" 
                            onChange = {(event) =>{setPassword(event.target.value)}}></input>
                            <a href='#'>Don't Forget Your Password!</a>
                            <button onClick={handleSubmit}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage; 