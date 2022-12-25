import React, { useState } from "react";
import "./Loginpage.css"
import "../Register/Registerpage.css"
function LoginPage(){
    return(
        <div>
             <div className="Pagebody">
                <div className="loginformcontainer">
                    
                    <div className="signincontainer">
                    <h1>Sign In</h1>
                        <form className="signinform">
                            <input 
                            type="text" 
                            placeholder="Username" 
                            ></input>
                            <input 
                            type="text" 
                            placeholder="Password" 
                            ></input>
                            <a href='/register'>Don't have an account register here</a>
                            <button >Log in </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage; 