import React from 'react'
//importo para modulo react y hook para estado local y hook de redux para dispach de action
import { useState } from 'react'
import { useDispatch } from 'react-redux'
//tambien trigo la action que busca
import {getCountryName} from '../Redux/reducers'
import './searchBarcss.css'

export default function SearchBar()  {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleImputChange = (event) => {event.preventDefault();
    setName(event.target.value)};

    const handleOnClick = (event) => {event.preventDefault();
    dispatch(getCountryName(name))};


    return (
        <div className='rightSide'>
            <input type='text' placeholder='...' onChange={(e) => handleImputChange(e)} />
             <button onClick={(e) => handleOnClick(e)}>Search</button>
        </div>
    )
}


