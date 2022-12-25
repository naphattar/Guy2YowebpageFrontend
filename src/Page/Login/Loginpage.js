import React, { useState } from "react";
import axios , {AxiosError} from "axios"
import "./Loginpage.css"
import "../Register/Registerpage.css"
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
function LoginPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const signIn = useSignIn();
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const uservalues = {
            username: username,
            password: password,
        };
        console.log(uservalues);
        try {
            const response = await axios.post('http://localhost:3001/login', uservalues);
            signIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: {username: uservalues.username}
            })
            console.log(`Login success welcome ${uservalues.username}`);
            navigate('/');
        } catch (err) {
            console.error("Error: ", err.message);
        }
    };
    /*
    const handleSubmit =  async(e) =>{
        e.preventDefault();

        await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(
            (res) => {
                res.json();
                signIn({
                    token: res.formData.token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: {username : value.username}
                })
            }
        
        ).catch((err) => {
                console.log(err.message);
            });
        console.log("fetch complete");
    }
    */

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