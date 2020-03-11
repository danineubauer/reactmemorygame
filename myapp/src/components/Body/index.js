// import React from "react";
import React, {Component} from 'react';
import Wrapper from "../Wrapper"
// import MemoryCard from "../MemoryCard"
import cards from "../../cards.json"
// import { render } from "@testing-library/react";


class Body extends Component {

    render() { 
        return (
            <Wrapper>
                <div>
                    <h1>{this.props.cards.id}</h1>
                </div>
                {/* {cards.map(card =>
                    <MemoryCard
                        image={this.card.image}
                    />
                )} */}
            </Wrapper>    
        )   
    }
}
        
export default Body; 