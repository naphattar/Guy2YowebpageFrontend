import React from "react";
import "./Aboutpage.css"
import "../Homepage/Homepage.css"
import guyimage from "../Image/guy4.jpg"
function Aboutpage(){
    return(
        <div>
            <div className="Pagebody">
                <div className="homepagecontent">
                    <div className="aboutpageimage">
                        <img src={guyimage} id="guyprofile2"></img>
                    </div>
                    <div className="aboutpagetext">
                        <h3>Hello!!! My name is Kusakorn Tonganan</h3>
                        <p> "I am studying Civil Enginnering at Chulalongkorn University
                        <br></br>My goal is to become Number 1 Civil Engineer in the world!!!"</p>
                        <section className="aboutpageinfo">
                            <div>Name : </div>
                            <div>Kusakorn Tonganan</div>
                            <div>Age : </div>
                            <div>19</div>
                            <div>Address : </div>
                            <div>Hatyai Songkhla Thailand</div>
                            <div>Email : </div>
                            <div>Idontwanttotellyouhaha@email.com</div>
                            <div>Goal : </div>
                            <div>Number 1 Civil Enginner</div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Aboutpage;