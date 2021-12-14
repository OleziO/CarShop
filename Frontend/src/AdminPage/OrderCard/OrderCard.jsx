import React from 'react'
import DescriptionFields from '../../CarCard/DescriptionField/DescriptionFields';
import { useSelector } from 'react-redux';
import "./style.css";
import "../../CarCard/style.css";
import Picture from '../../CarCard/Picture/Picture';
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import SecondaryButton from "../../SecondaryButton/SecondaryButton";
import { useDispatch } from 'react-redux';
import { setCar } from '../../store/carsListSlice';

export default function OrderCard(props) {

    let car = useSelector((state) => state.carList.value);
    car = car.filter((x) => x._id == props.id)[0];

    let order = useSelector((state) => state.orderList.value);
    order = order.filter((x) => x.user == props.name && x.phone == props.phone && x.id == props.id)[0];

    const deleteOrder = (event) => {
        if (event.target.className == 'primaryBtn') {
            const xhr = new XMLHttpRequest();
            const params = JSON.stringify(order);
            xhr.open("DELETE", 'http://localhost:8080/delete');
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(params);

            const xhr2 = new XMLHttpRequest();
            const params2 = JSON.stringify(car);
            xhr2.open("DELETE", 'http://localhost:8080/deleteCar');
            xhr2.setRequestHeader("Content-type", "application/json");
            xhr2.send(params2);
        }
    }

    return (
        <div className="order-card-wrapper">
            <Picture src={car.pic} />
            <h2 className="cardTitle borderText">{car.title} {car.year}</h2>
            <DescriptionFields 
                firstLabel="Ціна" 
                firstVal={'$ ' + car.price} 
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
                firstLabel="Ім'я" 
                firstVal={props.name} 
                secondLabel="Номер телефону" 
                secondVal={props.phone}/>
            <div onClick={deleteOrder} className='p-btn-wrapper'>
                <a href={"tel:"+props.phone}><SecondaryButton text="Зетелефонувати"/></a>
                <PrimaryButton text="Підтвердити"/>
            </div>
        </div>
    )
}
