import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/Navbar.css";
import "./Homepage.css"
import guy2 from "../Image/guy2.jpg"
function Homepage(){
    return(
        <div>
            <div className="Pagebody">
              <div className="homepagecontent">
                <div className="homepagetext">
                    <h1>Guy2Yo</h1>
                    <h2>"Worldclass Civil Engineer" </h2>
                </div>
                <div className="homepageimage">
                    <img src={guy2} id="guyprofile"></img>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Homepage;