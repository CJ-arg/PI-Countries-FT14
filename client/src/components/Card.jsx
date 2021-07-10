import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCountriesAction } from '../Redux/reducers'
import {Link} from 'react-router-dom'
import './cardcss.css'

const Card = (props) => {
    // const dispatch = useDispatch()
    // React.useEffect(() => {
    //     const fetchData =() => {
    //         dispatch(getCountriesAction())
    //     }
    //     fetchData()
    // }, [])
    // const videoGames = useSelector(store => store.videoGames)

    return (
        <div className="card">
           <Link to ='info' className='link-card'><img className="screen" src={props.flag} />
           <h1 className="card-title">{props.name}</h1>
           <p className="card-region">  {props.region}</p> 
           <p className="card-code"> ({props.code})    + </p>  </Link>
           
           </div>
    )
}

export default Card