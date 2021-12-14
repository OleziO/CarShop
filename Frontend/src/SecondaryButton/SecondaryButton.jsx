import React from 'react';
import './style.css'

const SecondaryButton = (props) => {
    return (
        <button className="secondaryBtn">{props.text}</button>
    );
}

export default SecondaryButton;
