import React from "react";

function Note(props){
    return (
        <div class="note">
            
            <h1><span>{props.id}</span>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;

