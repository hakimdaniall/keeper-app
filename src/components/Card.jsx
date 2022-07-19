import React from "react";

function Card(props) {
    return (
        <div className="note full-width--">
            <h1><span>{props.id}</span> {props.category}</h1>
            {props.setup && (
                <p>{props.setup} <span>{props.delivery}</span></p>
            )}
            {props.joke && (
                <p>{props.joke}</p>
            )}
        </div>
    );
}

export default Card;