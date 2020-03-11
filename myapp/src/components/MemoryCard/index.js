import React from "react";

function MemoryCard(props) {
    return (
        <div class="card">
            <img class="card-img-top" 
            src={props.image} 
            alt={props.id}/>
        </div>
    )
}
        
export default MemoryCard; 