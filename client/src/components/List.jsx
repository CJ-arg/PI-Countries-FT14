import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountriesAction} from '../Redux/reducers'
import './Listcss.css'
const List = () => {
    const dispatch = useDispatch()
    const countriesS = useSelector(store => store.countriesS.array)
    console.log(countriesS)



    return (
        <div>
            <h1>Countries & Countries</h1>
            <button onClick={() => dispatch(getCountriesAction())}>Get Countries</button>
            <div className="container">
                {countriesS.map(i => (<li className="text" key ={i.alpha3Code}> {i.name} { <img className="screen" src={i.flag} />}</li>))}
                
            </div>
        </div>
    )
}

export default List
