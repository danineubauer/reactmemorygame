// import React from "react";
import React, { useState } from "react";
import Wrapper from "../Wrapper"
import Container from "../Container"
// import MemoryCard from "../MemoryCard"
import cardsData from "../../cards.json"
import MemoryCard from '../MemoryCard';


const PhotoGrid = () => {
    const [cards, setCards] = useState(cardsData)

    const cardClicked = event => {
        console.log('card clicked: ', event.target); //loging the photo info clicked
        console.log(Math.floor(Math.random()*13)) 
        // const newShuffle = cards.(card => cardsData.id !== id)
        // setCards(newShuffle);
    }

    return (
        <Wrapper>
            <Container>
                {cards.map(card =>
                    <MemoryCard
                        image={card.image}
                        id={card.id}
                        onClick={cardClicked}
                    />
                )}
              </Container>
        </Wrapper>
    )

}

export default PhotoGrid; 