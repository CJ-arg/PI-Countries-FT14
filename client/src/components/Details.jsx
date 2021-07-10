import React from 'react'
import {Link} from 'react-router-dom'
import Navbarmenu from './Navbarmenu'
import './detailscss.css'

const Details = (props) => {
    return (
        <div >
            <Navbarmenu />
           <div className='details'>
               NOMBRE DE PAIS
               <div className='detail-txt'>CAPITAL


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