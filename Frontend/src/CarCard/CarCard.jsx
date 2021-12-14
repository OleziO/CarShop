import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import DescriptionFields from './DescriptionField/DescriptionFields';
import Picture from './Picture/Picture';
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLink } from '../store/carSlice';
import './style.css';
import CarPage from '../CarPage/CarPage';
import BuyForm from '../CarCardsSection/BuyForm/BuyForm';
import { visible } from '../store/buySlice';

const CarCard = (props) => {
    const link = "/" + props.id;
    const dispatch = useDispatch();

    const changeLink = (event) => {
        dispatch(setLink(link));
    }

    const buyFormVisible = () => {
        dispatch(visible({show:true, id: props.id}));
    }

    const buyForm = (event) => {
        if (event.target.className == "primaryBtn")
            buyFormVisible();
    }

    return (
        <div className="carCard">
            <Picture src={props.pic} />
            <h2 className="cardTitle borderText">{props.title} {props.year}</h2>
            <DescriptionFields 
                firstLabel="Ціна" 
                firstVal={'$ ' + props.price} 
                secondLabel="Розташування" 
                secondVal={props.city}/>
            <DescriptionFields
                firstLabel="Пробіг" 
                firstVal={props.run + ' км'} 
                secondLabel="Двигун" 
                secondVal={props.engineType + ' ' + props.engineМolume +' л'}/>
            <DescriptionFields 
                firstLabel="Коробка передач" 
                firstVal={props.transmission} 
                secondLabel="Привід" 
                secondVal={props.occasion}/>
            <div className="buttonGroup" onClick={buyForm}>
                <Link onClick={changeLink} to={link}><SecondaryButton text="Докладніше"/></Link>
                <PrimaryButton text="Купити"/>
            </div>
        </div>
    );
}

export default CarCard;
