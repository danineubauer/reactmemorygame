import React from "react";

function NavBar(props) {
    return (
        <ul className="nav justify-content-center">

            <li class="nav-item">
                <a className="nav-link disable">Score: {props.score} </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disable">Top Score: {props.highscore}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disable"> {props.message}</a>
            </li>

        </ul>  
    )
}

export default NavBar; 