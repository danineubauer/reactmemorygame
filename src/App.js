import React, { useState } from "react"; 
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import PhotoGrid from "./components/PhotoGrid";

const App = () => { 

    return (
        <Wrapper>
            <Jumbotron>
            </Jumbotron>
            <PhotoGrid></PhotoGrid>
        </Wrapper>
    )
}

export default App; 