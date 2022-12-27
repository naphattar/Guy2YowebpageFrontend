import React from "react";
import "./Popguypage.css"
import { useEffect,useState } from "react";
import img1 from "../Image/guy2.jpg";
import img2 from "../Image/guy1.jpg";
import img3 from "../Image/guy3.jpeg"
import img4 from "../Image/guy4.jpg";
import AuthService from "../../Services/authservice";
import UserService from "../../Services/userservice";
function Popguypage(){
    const currentUser= AuthService.getCurrentUser();
    const [score ,setScore] = useState(0);
    const [highscore,setHighscore] = useState(0);
    const [imageurl,setImageurl] = useState(img1);

    // for fetching user data 
    const updateScore = async (newscore)=>{
        if(!currentUser){
            return;
        }
        // update user score in the data base
        const newUserdata = await UserService.updateUserscore(currentUser.username,newscore);
        return newUserdata.highscore;
    }
    const getUpdatedUser = (score) =>{
        const userData = AuthService.getCurrentUser();
        userData.highscore = score;
        return userData;
    }

    useEffect(() => {
        async function fetchData(){
            if(currentUser != null){
                // set highscore UI
                const userdata = AuthService.getCurrentUser();
                setHighscore(userdata.highscore);
                // send the new highscore to the database
                await updateScore(userdata.highscore)
            }
        }   
        fetchData();
    },[]);


    const handleMousedown = (event) =>{
        const highscore = AuthService.getCurrentUser().highscore;
        if(score+1 > highscore){
           // const newhighScore = await updateScore(score+1);
            const updateUserdata = getUpdatedUser(score+1);
            setHighscore(score+1);
            localStorage.setItem("user", JSON.stringify(updateUserdata));
        }
       setScore(score+1);
       if(score >= 200){
        setImageurl(img4)
       }else if (score >= 100){
        setImageurl(img3);
       }else{
        setImageurl(img2);
       }
    };
    const handleMouseup = (event) =>{
        setImageurl(img1);
    };

    return(
        <div>
            <div className="popguypagebody">
                <div className="popguytext">
                    <h1>POP-GUY</h1>
                    <h1>Score:{score} Highscore:{highscore}</h1>
                </div>
                <div className="popguyimagecontainer">
                    <img src={imageurl} id="popguyimage" onMouseDown={handleMousedown} onMouseUp={handleMouseup}></img>
                </div>
            </div>
        </div>
    );
}
export default Popguypage;