import React, { useState } from "react";
import "./Loginpage.css"
import "../Register/Registerpage.css"
function LoginPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit =  async(e) =>{
        e.preventDefault();
        console.log(username);
        await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log(err.message);
            });
        console.log("fetch complete");
    }

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
                            onChange = {(event) =>{setUsername(event.target.value)}}
                            ></input>
                            <input 
                            type="text" 
                            placeholder="Password" 
                            onChange = {(event) =>{setPassword(event.target.value)}}
                            ></input>
                            <a href='/register'>Don't have an account register here</a>
                            <button onClick={handleSubmit}>Log in </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage; 