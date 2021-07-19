import React from 'react'
import {Link} from 'react-router-dom'
import './homecss.css'
import compass from "../assets/images/compass.png";

const Home = () => {
    return (
    <div className='home'>
            
        <header>
                <Link to ='App'> <img className= 'homeimg' src={compass} alt='Go to Country App'/> </Link>
                <Link to ='App'className='link' ><h1 className='homeTxt'> GO!</h1> </Link>
            
        </header>
    </div>
    )
}

export default Home
