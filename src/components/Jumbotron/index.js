import React from "react";
import "./style.css"
import NavBar from "../NavBar";

function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">memory Game</h1>
                <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Jumbotron;