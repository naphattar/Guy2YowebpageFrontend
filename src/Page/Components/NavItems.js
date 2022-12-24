import React from "react";
import { Link } from "react-router-dom";
function NavItems(props){
    return( 
        <li id={props.name} className="nav_item">
            <Link to={props.tolink} className="nav_link">{props.name}</Link>
        </li>
    );
}
export default NavItems;