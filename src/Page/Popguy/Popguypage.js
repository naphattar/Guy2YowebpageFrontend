import React from "react";
import "./Popguypage.css"
import { useEffect,useState } from "react";
import img1 from "../Image/guy2.jpg";
import img2 from "../Image/guy1.jpg";
import img3 from "../Image/guy3.jpeg"
import img4 from "../Image/guy4.jpg";
function Popguypage(){
    const [score ,setScore] = useState(0);
    const [imageurl,setImageurl] = useState(img1);
    const handleMousedown = (event) =>{
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
                    <h1>{score}</h1>
                </div>
                <div className="popguyimagecontainer">
                    <img src={imageurl} id="popguyimage" onMouseDown={handleMousedown} onMouseUp={handleMouseup}></img>
                </div>
            </div>
        </div>
    );
}
export default Popguypage;