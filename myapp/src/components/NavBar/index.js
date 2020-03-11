import React from "react";

function NavBar(props) {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="#">Clicky Game</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disable">Score: </a>
            </li>
            <li class="nav-item">
                <a class="nav-link disable">Top Score: </a>
            </li>

        </ul>  
    )
}

export default NavBar; 