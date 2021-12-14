import React from 'react'
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { setPage } from '../store/pageSlice';
import "./style.css";

const MainPage = () => {
    const dispatch = useDispatch();


    const chengePage = () => {
        dispatch(setPage("Авто в наявності"));
    }

    return (
        <div className="mainPageWrapper">
            <img src="mainPage.jpeg" alt="" />
            <h1>BOSS AUTO UKRAINE</h1>
            <p><strong>Boss Auto Ukraine</strong> – це комплексна <br />
                доставка та транспортування авто з <br />
                аукціонів Канади, Європи, США, Кореї.<br />
                Доставляємо <span>авто з США, Канади, Європи</span> <br />
                і <span>Кореї</span> під ключ – ви отримаєте готову <br />
                машину з повним пакетом документів.</p>
            <div className="mainBtn">
                <Link onClick={chengePage} to="/cars"><SecondaryButton text="Перейти до підбору авто"/></Link>
            </div>  
        </div>
    );
}

export default MainPage;
