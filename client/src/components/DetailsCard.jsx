import React from 'react'
import "./detailsCardcss.css"



const DetailsCard = (props) => {
    return (
        
        <div className="bigD">
            
           <img className="screenD" src={props.flag} />
          
        <div className="detailsD">
                        <h1 className="card-titleD">{props.name}  </h1>
           <p className="card-D">Capital City:  {props.capital}  </p> 
            <p className="card-D">Continent: {props.region} </p>  
           <p className="card-D"> Code: {props.code}</p>
         <p className="card-D"> Population: {props.population}</p> 
             </div>
        </div>
        
    )
}

export default DetailsCard
