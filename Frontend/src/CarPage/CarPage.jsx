import React from 'react';
import DescriptionFields from '../CarCard/DescriptionField/DescriptionFields';
import carsListSlice from '../store/carsListSlice';
import carSlice from '../store/carSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import BuyForm from '../CarCardsSection/BuyForm/BuyForm';
import { useDispatch } from 'react-redux';
import { visible } from '../store/buySlice';
import "./style.css";


export default function CarPage(props) {
    const dispatch = useDispatch();
    const link = useSelector((state) => state.car.value).split('/');
    const id = link[link.length-1];
    let car = useSelector((state) => state.carList.value);
    car = car.filter((item) => item._id == id)[0];
    let showBuy = useSelector((state) => state.buy.value.show);
    let formBuy = showBuy ? <BuyForm /> : <></>;

    const buyFormVisible = () => {
        dispatch(visible({show: true, id: car.id}));
    }

    const buyForm = (event) => {
        if (event.target.className == "secondaryBtn")
            buyFormVisible();
    }
    
    return (
        <>
        <div className="car-page-wrapper">
            <div className="pic-block">
                <img src={car.pic} alt="" />
                <div className="car-page-btn-group" onClick={buyForm}>
                    <Link to="/cars"><PrimaryButton text="Назад" /></Link>
                    <SecondaryButton text="Купити" />
                </div>
            </div>

            <div className="car-description-block">
                <div className="car-desc">
                    <h1 className="car-title">{car.title} {car.year}</h1>
                    <h2 className="car-price">$ {car.price}</h2>
                    <DescriptionFields 
                        firstLabel="Колір" 
                        firstVal={car.color} 
                        secondLabel="Розташування" 
                        secondVal={car.city}/>
                    <DescriptionFields
                        firstLabel="Пробіг" 
                        firstVal={car.runKM + ' км'} 
                        secondLabel="Двигун" 
                        secondVal={car.engineType + ' ' + car.engineМolume +' л'}/>
                    <DescriptionFields 
                        firstLabel="Коробка передач" 
                        firstVal={car.transmission} 
                        secondLabel="Привід" 
                        secondVal={car.occasion}/>
                    <DescriptionFields 
                        firstLabel="Тип кузова" 
                        firstVal={car.bodyType} 
                        secondLabel="Кількість місць" 
                        secondVal={car.slotCount}/>
                    <DescriptionFields 
                        firstLabel="Стан" 
                        firstVal={car.state}  />
                </div>
            </div>
        </div>
        {formBuy}
        </>
    )
}
