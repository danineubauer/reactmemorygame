import React, { useState } from "react"; 
import NavBar from "./components/NavBar"
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import PhotoGrid from "./components/PhotoGrid";
import Score from "./components/Score" 

const App = () => { 

    return (
        <Wrapper>
            <NavBar></NavBar>
            <Jumbotron></Jumbotron>
            <PhotoGrid></PhotoGrid>
        </Wrapper>
    )
}

export default App; 