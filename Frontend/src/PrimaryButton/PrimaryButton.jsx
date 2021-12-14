import React from 'react';
import './style.css';


const PrimaryButton = (props) => {


    return (
        <button className="primaryBtn">{props.text}</button>
    );
}

export default PrimaryButton;
