import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCountriesAction } from '../Redux/reducers'
import './cardcss.css'

const Card = (props) => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        const fetchData =() => {
            dispatch(getCountriesAction())
        }
        fetchData()
    }, [])
    // const videoGames = useSelector(store => store.videoGames)

    return (
        <div className="card">
           <img className="screen" src={props.flag} />
           <h1 className="card-title">{props.name}</h1>
           <p className="card-genres">{props.alpha3Code}</p>
      
        </div>
    )
}

export default Card