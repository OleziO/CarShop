import React from 'react';
import "./style.css";

const TitleText = (props) => {
    return (
        <div className="blockWrapper">
            <p className="textLabel">{props.firstLabel}</p>
            <p className="textLabel">{props.secondLabel}</p>
        </div>
    );
}

export default TitleText;
