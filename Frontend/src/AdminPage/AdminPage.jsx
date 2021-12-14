import React from 'react';
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import {setOrderList} from "../store/orderListSlice";
import OrderCard from './OrderCard/OrderCard';
import { setCar } from '../store/carsListSlice';
import AddCar from './AddCar/AddCar';
import AdminMenu from '../AdminMenu/AdminMenu';
import { useEffect } from 'react';

export default function AdminPage() {
    const dispatch = useDispatch();

    const request = new XMLHttpRequest();

    useEffect(() => {
        request.open('GET', 'http://localhost:8080/ordersListGetAll');
        request.onload = function() {
            dispatch(setOrderList(JSON.parse(request.response)));
        }
        request.send();
    });

    const orderList = useSelector((state) => state.orderList.value);
    const carList = useSelector((state) => state.carList.value);
    let adminPage = useSelector(state => state.adminPage.value);
    let list = [];
    orderList.forEach(order => {
        list.push(<OrderCard id={order.id} name={order.user} phone={order.phone}/>);
    });
    adminPage = adminPage == 'Добавити' ? 
    (<div className='admin-page-content-wrapper'>
        <AddCar />
    </div>)
     : 
    (<div className='admin-page-content-wrapper'>
        {list}
    </div>)
    return (
        <div className='admin-page-wrapper'>
            <AdminMenu />
            {adminPage}
        </div>
    )
}
