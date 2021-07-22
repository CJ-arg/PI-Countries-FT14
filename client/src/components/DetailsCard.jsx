import React from 'react'
import "./detailsCardcss.css"
import { useState } from 'react'



const DetailsCard = (props) => {
    
    const [showAct, setShowAct] = useState(true);

    // if (props.activities[0].name.length >3){
    //     setShowAct(true)
    // }
    console.log(props.activities)
    return (
        
        <div className="bigD">
            
           <img className="screenD" src={props.flag} />
          
        <div className="detailsD">
                        <h1 className="card-titleD">{props.name}  </h1>
           <p className="card-D">Capital City:  {props.capital}  </p> 
            <p className="card-D">Continent: {props.region} </p>  
           <p className="card-D"> Code: {props.code}</p>
           <p className="card-D"> Area: {props.area} km</p>
         <p className="card-D"> Population: {props.population}</p> 
         {(props.activities.length >0) ?  <><p className="card-D"> Activitie: { props.activities[0].name } </p>
                         <p className="card-D"> Season: { props.activities[0].season } </p>
                        <p className="card-D"> Level: { props.activities[0].level } Time:  { props.activities[0].time } </p></> : <p className="card-D">No hay actividades registradas</p>}
            </div>
        </div>
        
    )
}

export default DetailsCard


// { `Name: ${props.activities[0].name} Season: ${props.activities[0].season }  Level: ${props.activities[0].level}
// Time: ${props.activities[0].time}
//  `  }