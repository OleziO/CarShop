import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { setPage } from '../store/pageSlice';
import './style.css';

export default function Menu() {
    const page = useSelector((state) => state.page.value);
    const dispatch = useDispatch();


    const chengePage = (event) => {
        dispatch(setPage(event.target.innerText));
    }

    const mainPageClick = () => {
        dispatch(setPage("Головна"));
    }

    const items = [
            <Link onClick={chengePage} to="/" className={page == 'Головна' ? 'manuSection checkedSection' : "manuSection"}>Головна</Link>,
            <Link onClick={chengePage} to="/cars" className={page == 'Авто в наявності' ? 'manuSection checkedSection' : "manuSection"}>Авто в наявності</Link>,
            <Link                      to="/login" className={page == 'Увійти' ? 'manuSection checkedSection' : "manuSection"}>Увійти</Link>,
            <Link onClick={chengePage} to="/contact" className={page == 'Контакти' ? 'manuSection checkedSection' : "manuSection"}>Контакти</Link>
    ];

    return (
        <div className="menuWrapper">
            <Link onClick={mainPageClick} className="logo-link" to="/"><img className="shopLogo" src="./shopLogo.svg" alt="Shop Logo" /></Link>
            {items}
        </div>
    );
}
