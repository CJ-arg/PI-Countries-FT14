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

         {props.activities.map( act => (
             <> <p> {act.name} </p>
             <p> {act.season} </p>
             <p> {act.time} </p>
             <p> {act.level} </p>
             
             </>
         ))}

        
         
            </div>
        </div>
        // {countriesS.map((i, index) => {return <Card name={i.name} flag={i.flag} code={ i.alpha3Code} region={i.region}  />} )}
                
    )
}

export default DetailsCard


// { `Name: ${props.activities[0].name} Season: ${props.activities[0].season }  Level: ${props.activities[0].level}
// Time: ${props.activities[0].time}
//  `  }