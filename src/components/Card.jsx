import React from "react";

function Card(props) {
    return (
        <div className="note full-width--">
            <h1><span>{props.id}</span> {props.category}</h1>
            <p>{props.joke}</p>
        </div>
    );
}

export default Card;