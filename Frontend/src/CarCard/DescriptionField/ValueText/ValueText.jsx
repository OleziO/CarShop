import React from 'react';
import "./style.css";

const ValueText = (props) => {
    return (
        <div className="blockWrapper">
            <p className="carContentWrapper">{props.firstVal}</p>
            <p className="carContentWrapper">{props.secondVal}</p>
        </div>
    );
}

export default ValueText;
