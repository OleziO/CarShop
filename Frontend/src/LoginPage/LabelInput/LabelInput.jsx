import React from 'react';
import { useDispatch } from 'react-redux';
import { setName, setPhone } from '../../store/orderSlice';
import { setLogin, setPassword } from '../../store/userSlice';
import "./style.css";

export default function LabelInput(props) {
    const dispatch = useDispatch();

    const changeDataOrder = (event) => {
        switch(props.data) {
            case "name": 
                dispatch(setName(event.target.value));
                break;
            case "phone": 
                dispatch(setPhone(event.target.value));
                break;
            case "login":
                dispatch(setLogin(event.target.value));
                break;
            case "password":
                dispatch(setPassword(event.target.value));
                break;
            default:
                break;
        }
    }

    return (
        <label>
            {props.text}
            <input type={props.type} onChange={changeDataOrder} placeholder={props.placeholder}/>
        </label>
    )
}
