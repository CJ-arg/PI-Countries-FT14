import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountriesAction} from '../Redux/reducers'
import './Listcss.css'
import Card from './Card'



const List = () => {
    const dispatch = useDispatch()
    const countriesS = useSelector(store => store.countriesS.array)
    console.log(countriesS)



    return (
        <div>
            {/* <h1>Countries & Countries</h1> */}
            <button onClick={() => dispatch(getCountriesAction())}>Get Countries</button>
            <div className="container">
                {countriesS.map((i, index) => {return <Card name={i.name} flag={i.flag} code={ i.alpha3Code} region={i.region}  />} )}
                
            </div>
           
       
        </div>
    )
}

export default List
