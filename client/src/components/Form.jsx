import React from 'react'
import { Fragment } from 'react'
import "./formcss.css"
import Navbarmenu from './Navbarmenu'
import OptionsSelct from './OptionsSelct'


const Form = () => {

    return (
        <Fragment>
        
        <Navbarmenu />
        
        <div className="form">
            <form>
  <label> Ativitie Name:     </label>
  <input type="text" id="fname" name="fname"/><br/>
  
            <form  id="radioB">  Time:    
  <input type="radio" id="radioB" name="level" value="1"/>
  <label >   1h     </label>
  <input type="radio" id="radioB" name="level" value="2"/>
  <label >   2h     </label>
  <input type="radio" id="radioB" name="level" value="3"/>
  <label >   3h     </label>
  <input type="radio" id="radioB" name="level" value="4"/>
  <label >   1/2 day    </label>
  <input type="radio" id="radioB" name="level" value="5"/>
  <label >   1 day</label>
</form>    
</form>
                    <form>
  <label >Dificulty Level:       </label>
  <input type="number" id="quantity" name="quantity" min="1" max="10"/>
</form>
<div>   <label >   Season:   </label>
            <select> 
            <option value="Summer"selected>Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter" >Winter</option>
            <option value="Spring">Spring</option>
            </select></div>
        <div>  <label >   Country  : </label>
              

        <OptionsSelct />
        </div>
        <button className="boton" type="submit" value="Create"> Create  </button>
        </div>
        </Fragment>
    )
}

export default Form
