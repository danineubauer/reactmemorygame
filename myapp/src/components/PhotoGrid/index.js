// import React from "react";
import React, { useState } from "react";
import Wrapper from "../Wrapper"
import Container from "../Container"
// import MemoryCard from "../MemoryCard"
import cardsData from "../../cards.json"
import MemoryCard from '../MemoryCard';
import uuid from "uuid/v1"
import "./style.css"
import NavBar from "../NavBar";



const PhotoGrid = () => {
    const [highCount, sethighCount] = useState(0);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Click image to start");

    const Message = () => { 

        // handleIncrement increments this.state.count by 1
        const handleMessages = (currentstatus) => {
          setCount(currentstatus);
        };
    }

    //score: 
    const Counter = (count) => {
        console.log("conter fx fire") 

        // handleIncrement increments this.state.count by 1
       
          setCount(count + 1);
          console.log("counter updated ++");

    }

    const highScore = (score) => {
    
        // handleIncrement increments this.state.count by 1
        
            sethighCount(score);
     
    }

    const [cards, setCards] = useState(cardsData)
    console.log('cardsData', cardsData)

    const cardClicked = event => {
      
        console.log('card clicked: ', event.target); //loging the photo info clicked

        console.log('cardsData', cardsData)
        //console.log(this)
    console.log("cards Data", event.target.id)
   
        //then check if the card has been clicked check if current click is true through fx
         checkCardId(event.target.id); 

        shufflePhotoDisplay();

    }
    
    //shufles photo:
    const shufflePhotoDisplay = () => {
        const shuffle = require('shuffle-array'), 
            collection = cards;
            console.log("cards", cards);
            // console.log("cards", cards2);
             console.log(cards.length)
             setCards(shuffle(cards, { 'copy': true }))
    }
    
    const checkCardId = id => { 
        console.log('Friend to check id', id);
        //we need to find the actual loc for the specific id
        const newListOfFriends = cardsData.filter(cardData => cardData.id == id);
        //verify it
        console.log(newListOfFriends);
        //check if current click is true or not
        if (newListOfFriends[0].clicked === true) {
            alert('game over');
            //chech if cuuscore>highscore, if so update it
            //make score =0 
            if (count > highCount) {
               highScore(count)
            }


        } else { 
            alert('keep playing')
            newListOfFriends[0].clicked = true; 
            console.log(newListOfFriends[0])
            //update score ++
            Counter(count);

        }
        //newListOfFriends[0].clicked ==true
        //if it is currently true
        //game is over and do all the actions
        //check current score >high score, if so update high score
        //tell user game is over
        //else (if clicked is not true update the state of clicked to true)
        //update the click state to true

        // newListofFriends[0].clicked=true;
        
        //verify that the clicked state is true
        //console.log(newLi)
        //you need to run a filter to find the current array location for the specific index 
        //verify the index
        //then set the cardsData[index]=newListofFriends[0]

        //set the state of the cardsData

        //do the if cond for clicked
        //setFriends(newListOfFriends);
    }

    return (
        <Wrapper>
        <NavBar score={count}  highscore={highCount}  message={message}/>
                <Container>
                        {cards.map(card =>  { 
                            return (
                                <img key={uuid()} id={card.id} src={card.image} onClick={cardClicked}/>
                            )
                        })
                        }
                </Container>
        </Wrapper>

    )
    }

export default PhotoGrid; 