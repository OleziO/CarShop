import React from 'react';
import './style.css';
import LabelInput from '../../LoginPage/LabelInput/LabelInput';
import SecondaryButton from '../../SecondaryButton/SecondaryButton';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useSelector, useDispatch } from 'react-redux';
import {visible} from '../../store/buySlice';
import { setId } from '../../store/orderSlice';

export default function BuyForm() {
    const dispatch = useDispatch();
    dispatch(setId(useSelector(state => state.buy.value.id)));
    const order = useSelector(state => state.order.value);

    const buyFormVisible = () => {
        dispatch(visible({show: false, id: ''}));
    }

    const show = (event) => {
        if (event.target.className == "secondaryBtn")
            buyFormVisible();
    }

    const add = (event) => {
        if (event.target.className == "primaryBtn") {
            event.preventDefault();
            const http = new XMLHttpRequest();
            const url = 'http://localhost:8080/cars'
            const params = JSON.stringify(order);
            http.open('POST', url, true);
            http.setRequestHeader("Content-type", "application/json");
            http.send(params);
            buyFormVisible()
        }
    }

    return (
        <div className='blur-background'>
            <form className='buy-form-wrapper' onClick={add}>
                <h2>Замовлення</h2>
                <LabelInput data="name" type="text" placeholder="ПІП"/>
                <LabelInput data="phone" type="text" placeholder="Номер телефону"/>
                <div onClick={show} className='buy-btn-group'>
                    <SecondaryButton text="Назад"/>
                    <PrimaryButton text="Купити"/>
                </div>
            </form>
        </div>
    )
}
