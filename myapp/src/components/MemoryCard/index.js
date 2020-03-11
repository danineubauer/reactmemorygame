import React from "react";
import "./style.css" 
 
function MemoryCard(props) {
    return (
        <div class="img-container">
            <img class="card-img-top" 
            src={props.image} 
            alt={props.id}
            onClick={props.onClick}/>
        </div>
    )
}
        
export default MemoryCard; 