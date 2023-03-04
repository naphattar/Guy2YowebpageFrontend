import React, { useState } from "react";
import axios , {AxiosError} from "axios"
import "./Loginpage.css"
import "../Register/Registerpage.css"
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/authservice";

function LoginPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const signIn = useSignIn();
    const navigate = useNavigate();

    const handleSubmit  = async (e) => {
        e.preventDefault();
          await AuthService.login(username, password)
          .then(() => {
              if(localStorage.getItem("user")){
                console.log("Login completed");
                navigate("/");
                window.location.reload();
              }
            },
            (error) => {
              const resMessage =
                ( error.response.data.message) ||
                error.message ||
                error.toString();
                setError(resMessage);
            }
          );
      };
      
      const errorMessage = error ?  error  : "Don't have an account? ";

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
                            <a href='/register'> {errorMessage+" register here"}</a>
                            <button onClick={handleSubmit}>Log in </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage; 