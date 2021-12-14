import React from 'react';
import CarCard from '../CarCard/CarCard';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setCar } from '../store/carsListSlice';
import "./style.css";
import BuyForm from './BuyForm/BuyForm';



const CarCardsSections = () => {
    const dispatch = useDispatch();

    const request = new XMLHttpRequest();

    useEffect(() => {
        request.open('GET', 'http://localhost:8080/cars');
        request.onload = function() {
            dispatch(setCar(JSON.parse(request.response)));
        };
        request.send();
    });

    let carsList = useSelector((state) => state.carList.value);
    let list = [];
    carsList.forEach(car => {
        list.push(<CarCard pic={car.pic} id={car._id} title={car.title} year={car.year} engineType={car.engineType} engineМolume={car.engineМolume} transmission={car.transmission} occasion={car.occasion} city={car.city} price={car.price} run={car.runKM}/>);
    });
    let showBuy = useSelector((state) => state.buy.value.show);
    let formBuy = showBuy ? <BuyForm /> : <></>;
    
    return (
        <>
            <div className="cardsWrapper">
                {list}
            </div>
            {formBuy}
        </>
    );
}

export default CarCardsSections;
