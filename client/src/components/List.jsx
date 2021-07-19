import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getCountriesAction} from '../Redux/reducers'
import { useState, useEffect } from 'react'
import './Listcss.css'
import Card from './Card'
import Form from './Form'


const List = () => {
    const dispatch = useDispatch()
    const countriesS = useSelector(state => state.countriesS.array)
    // console.log(countriesS)
    const [page, setPage] = useState(0)
    const [order, setOrder] = useState("ASC")
    const [filter, setFiltro] = useState('')   
    const [pop, setPop] = useState("name")         
    
    //orden
    const changeOrder = (e) => {
        e.preventDefault();
        setOrder(e.target.value);
    }
    const changePop = (e) => {
        e.preventDefault();
        setPop(e.target.value);
    }
    const changeRegion = (e) => {
        e.preventDefault();
        setFiltro(e.target.value);
    }
    const prev = e => {
        e.preventDefault();
        if (page<=0){
        setPage(0)
    } else {
        setPage(page - 6)
    }
}

    const next =(e)=> {
        e.preventDefault();
        if (countriesS.length < 6){
        setPage(0);
    } else {
        setPage(page + 6)
    }
}
    return  (
        useEffect(() =>
        {
            dispatch(getCountriesAction(page, order, filter, pop))
        },[dispatch, page, order, filter, pop]),
       
      

        <div >

            <div className="query">
            {/* <h1>Countries & Countries</h1> */}
            <select className="selectors" onChange={e=> changePop(e)}> 
            <option value="name" selected>by Name </option>
            <option value="population">by Population </option>
            {/* <option value="area">by Area </option> */}
           </select>
           
            <select className="selectors" onChange={e=> changeOrder(e)}> 
            <option value="ASC"selected>Order  Asc ▼</option>
            <option value="DESC">Order  Dsc ▲</option>
           </select>
           
            {/* <h1>Countries & Countries</h1> */}
           
           
            <select className="selectors" onChange={e=> changeRegion(e)}> 
            <option value=""selected>All Regions</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
                       </select>
                       <br/>
             <button  className="nextprev" onClick={e=> prev(e)}> ◄◄ </button>
            <button  className="nextprev" onClick={e=> next(e)}> ►►</button></div>
          
                   
            <br/>

            <div className="container">
                {countriesS.map((i, index) => {return <Card name={i.name} flag={i.flag} code={ i.alpha3Code} region={i.region}  />} )}
                
        </div>
           
       
        </div>
    )
}

export default List
