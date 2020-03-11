import React, { useState } from "react"; 
import NavBar from "./components/NavBar"
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";
import Score from "./components/Score" 

const App = () => { 

    return (
        <Wrapper>
            <NavBar></NavBar>
            <Jumbotron></Jumbotron>
            <Body></Body>
        </Wrapper>
    )
}

export default App; 