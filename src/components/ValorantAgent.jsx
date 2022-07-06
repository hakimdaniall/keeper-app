import React from "react";

function ValorantAgent(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img className="agent-img" src={props.image} alt="" />
        </div>
    )
}

export default ValorantAgent;