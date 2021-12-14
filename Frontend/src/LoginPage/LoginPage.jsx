import React from 'react';
import "./style.css";
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import LabelInput from './LabelInput/LabelInput';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { setPage } from '../store/pageSlice';
import { login } from '../store/userSlice';
import AdminPage from '../AdminPage/AdminPage';
import { setCar } from '../store/carsListSlice';

export default function LoginPage() {
    const adminUser = useSelector(state => state.user.value);
    const adminPage = adminUser.signed ? <AdminPage /> : <></>;
    const dispatch = useDispatch();

    const page = useSelector((state) => state.page.value);
    let pageName = "";

    const request = new XMLHttpRequest();
    useEffect(() => {
        request.open('GET', 'http://localhost:8080/cars');
        request.onload = function() {
            dispatch(setCar(JSON.parse(request.response)));
        }; 
        request.send();

        if (adminUser.signed)
            dispatch(setPage('Замовлення'));
    });

    const chengePage = (event) => {
        dispatch(setPage(event.target.innerText));
    }

    switch(page) {
        case "Головна": 
            pageName = "";
            break;
        case "Авто в наявності": 
            pageName = "cars";
            break;
        case "Контакти": 
            pageName = "contact";
            break;
    }

    const loginHandler = (event) => {
        event.preventDefault();
        if (event.target.className == 'primaryBtn') {
            const http = new XMLHttpRequest();
            const url = 'http://localhost:8080/adminLogin'
            const params = JSON.stringify({name: adminUser.login, password: adminUser.pass});
            http.open('POST', url, true);
            http.setRequestHeader("Content-type", "application/json");
            http.onload = function() {
                dispatch(login(JSON.parse(http.response)));
            };
            http.send(params);
        }
    }

    return (
        <>
        <div className="login-wrapper">
            <form className="login-form">
                <img src="loginLogo.svg" alt="" />
                <LabelInput data="login" type="text" placeholder="Логін"/>
                <LabelInput data="password" type="password" placeholder="Пароль"/>
                
                <div className="btn-wrapper" onClick={loginHandler}>
                    <Link to={"/"+pageName}> <SecondaryButton text="Назад" /></Link>
                    <PrimaryButton text="Увійти" />
                </div>
            </form>
        </div>
        {adminPage}
        </>
    )
}
