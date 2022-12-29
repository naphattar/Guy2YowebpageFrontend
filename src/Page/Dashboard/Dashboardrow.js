import React from "react";
import "./Dashboard.css"
function Dashboardrow({username,rank,highscore}){
    return(
        <tr className="userrow">
            <td className="userdata">{rank}</td>
            <td className="userdata">{username}</td>
            <td className="userdata">{highscore}</td>
        </tr>

    );
}
export default Dashboardrow;