import React, { useState } from "react"; 
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import PhotoGrid from "./components/PhotoGrid";
import Score from "./components/Score" 

const App = () => { 

    return (
        <Wrapper>
            <Jumbotron></Jumbotron>
            <PhotoGrid></PhotoGrid>
        </Wrapper>
    )
}

export default App; 