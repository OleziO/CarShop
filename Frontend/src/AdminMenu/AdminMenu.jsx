import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { setPage } from '../store/pageSlice';
import '../Menu/style.css';
import { setAdminPage } from '../store/adminPageSlice';

export default function AdminMenu() {
    const page = useSelector((state) => state.page.value);
    const dispatch = useDispatch();


    const chengePage = (event) => {
        if (event.target.innerText != "Вихід") {
            dispatch(setPage(event.target.innerText));
            dispatch(setAdminPage(event.target.innerText));
        }
    }

    const mainPageClick = () => {
        dispatch(setPage("Головна"));
    }

    const items = [
            <p onClick={chengePage} className={page == 'Замовлення' ? 'manuSection checkedSection' : "manuSection"}>Замовлення</p>,
            <p onClick={chengePage} className={page == 'Добавити' ? 'manuSection checkedSection' : "manuSection"}>Добавити</p>,
            <Link onClick={mainPageClick} to="/" className={page == 'Головна' ? 'manuSection checkedSection' : "manuSection"}>Вихід</Link>
    ];

    return (
        <div className="menuWrapper">
            <Link onClick={mainPageClick} className="logo-link" to="/"><img className="shopLogo" src="./shopLogo.svg" alt="Shop Logo" /></Link>
            {items}
        </div>
    );
}
