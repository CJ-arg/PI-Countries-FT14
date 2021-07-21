import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbarmenu from './Navbarmenu'
import {getCountryDetails} from '../Redux/reducers'

import DetailsCard from './DetailsCard'


const Details = (props) => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const countrieD = useSelector(state => state.countriesS.arrayDetail)
    // const [data, setData] = useState([])
    
    return (
        
        useEffect(() =>
        {dispatch(getCountryDetails(id))},[]
        ),
       
        <div >
           
            <Navbarmenu />
        <div > 
           <div >
                {
                countrieD.map((i, index) => {return <DetailsCard name={i.name} flag={i.flag} code={ i.alpha3Code} region={i.region} population={i.population} Subregion={i.region} area={i.area} capital={ i.capital}/>} )}
            </div>
            
        </div>
            
        </div>
    )
    

}
export default Details
// [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// [ ] Código de país de 3 letras (id)
// [ ] Capital
// [ ] Subregión
// [ ] Área (Mostrarla en km2 o millones de km2)
// [ ] Población
// [ ] Actividades turísticas con toda su información asociada