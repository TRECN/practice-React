import React from 'react'
import img from '../../assets/cards/Jashn_the_Restaurant.webp'
import './Card.css'

function Card() {
    return (
        <div className='Card'>
            <img src={img} alt="" />
        </div>
    )
}

export default Card
