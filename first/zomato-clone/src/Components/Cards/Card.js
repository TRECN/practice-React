import React from 'react'
import img from '../../assets/cards/Jashn_the_Restaurant.webp'
import './Card.css'

function Card({
    name,
    src,
    rating,
    cuisine,
    off,
    notice,
    time,
    location
}) {
    return (
        <div className='Card'>
            <img className={`im ${src}`}/>
            <div className='hoverr'>
                <p className="discount">₹75 OFF</p>
                <p className="time">30 min</p>
            </div>
            <div className="detail">
                <div className="detail_1">
                    <div className="name">
                        <h4>{name}</h4>
                    </div>
                    <div className="rating">
                        <h4>{rating}</h4>
                        <img className='star'/>
                    </div>
                </div>
                <div className="detail_2">
                    <div className="cuisine">
                        <h4>{cuisine}</h4>
                    </div>
                    
                    <div className="off">
                        <h4>{off}</h4>
                    </div>
                    
                </div>
                <div className="location">
                        <h4>{location}</h4>
                    </div>
                <div className="close">
                        <h4>{time}</h4>
                    </div>
                
                <div className="detail_3">
                <div className="maxsafe">
                        <img className='max'/>
                    </div>
                    <div className="notice">
                        <h4>{notice}</h4>
                    </div>   
                </div>
                
            </div>
        </div>
    )
}

export default Card
