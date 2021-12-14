import React from 'react';
import "./style.css";
import ValueText from './ValueText/ValueText';
import TitleText from './TitleText/TitleText';

const DescriptionFields = (props) => {
    return (
        <div className="descriptionWrapper borderText">
        <TitleText firstLabel={props.firstLabel} secondLabel={props.secondLabel}/>
        <ValueText firstVal={props.firstVal} secondVal={props.secondVal}/>
    </div>
    );
}

export default DescriptionFields;