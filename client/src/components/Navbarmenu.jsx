import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './Navbarmenucss.css'
import SearchBar from './SearchBar';


const Navbarmenu = () => {
    const [showLinks, setShowLinks] = useState(false)
    const camera= './img/camara.png'


    return (
        <div className="Nav"> 
        <div className='leftSide'>
            <div className='links' id={showLinks ? 'hidden' : ''}>
            <Link to='/'> <img className="portada" src=".\img\camara.png" alt='camara image'/></Link>
                <a href='/Home'>Home </a>
            <a href='/Create'>Create</a>
            <a href='/About'>About </a></div>
        <button onClick={()=> setShowLinks(!showLinks)}>  Open  </button>
        </div>
         <div >
             <SearchBar/>
         </div>
        </div>
    )
}

export default Navbarmenu
