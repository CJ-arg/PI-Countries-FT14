import React from 'react'
import './selectDinamicocss.css'
import { useState, useEffect } from 'react'

const SelectDinamico = (props) => {
    const [value, setvalue] = useState("") 
 return (

    useEffect(() =>
        {
            setvalue(props.name)
        },[props.name]),
  
       <>
            <option value= {value} >{props.name}</option>            
              
                 </>
     
    )
}

export default SelectDinamico
