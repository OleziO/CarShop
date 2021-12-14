import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { setNewCar } from '../../store/newCarsSlice';
import "./style.css";

export default function AddCar() {
    let newCar = useSelector(state => state.newCar.value);
    let car = Object.assign({}, newCar);
    const dispatch = useDispatch();

    const changeData = (event) => {
        const dataTitle = event.target.placeholder;

        switch(dataTitle) {
            case 'Заголовок оголошення':
                car.title = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Рік випуску':
                car.year = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Тип пального':
                car.engineType = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Об`єм двигуна':
                car.engineМolume = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Тип коробки передач':
                car.transmission = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Привід':
                car.occasion = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Колір':
                car.color = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Місто':
                car.city = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Ціна':
                car.price = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Пробіг':
                car.runKM = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Кузов':
                car.bodyType = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Кількість місць':
                car.slotCount = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Стан':
                car.state = event.target.value;
                dispatch(setNewCar(car));
                break;
            case 'Зображення':
                car.pic = event.target.value;
                dispatch(setNewCar(car));
                break;
        }
    }

    const addNewCarToList = (event) => {
        event.preventDefault();
        const http = new XMLHttpRequest();
        const url = 'http://localhost:8080/add'
        const params = JSON.stringify(newCar);
        http.open('POST', url, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(params);
    }

    return (
        <div className='add-car-wrapper'>
            <form className='add-from-wrapper'>
                <input onChange={changeData} type="text" placeholder='Заголовок оголошення'/>
                <input onChange={changeData} type="text" placeholder='Рік випуску'/>
                <input onChange={changeData} type="text" placeholder='Тип пального'/>
                <input onChange={changeData} type="text" placeholder='Об`єм двигуна'/>
                <input onChange={changeData} type="text" placeholder='Тип коробки передач'/>
                <input onChange={changeData} type="text" placeholder='Привід'/>
                <input onChange={changeData} type="text" placeholder='Колір'/>
                <input onChange={changeData} type="text" placeholder='Місто'/>
                <input onChange={changeData} type="text" placeholder='Ціна'/>
                <input onChange={changeData} type="text" placeholder='Пробіг'/>
                <input onChange={changeData} type="text" placeholder='Кузов'/>
                <input onChange={changeData} type="text" placeholder='Кількість місць'/>
                <input onChange={changeData} type="text" placeholder='Стан'/>
                <input onChange={changeData} type="text" placeholder='Зображення'/>
                <div onClick={addNewCarToList} className='add-btn-wrapper'>
                    <PrimaryButton text='Подати'/>
                </div>
            </form>
        </div>
    )
}

// pic
// title
// year
// engineType
// engineМolume
// transmission
// occasion
// color
// city
// price
// runKM
// bodyType
// slotCount
// state
