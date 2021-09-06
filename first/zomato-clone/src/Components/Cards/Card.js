import React from 'react'
import img from '../../assets/cards/Jashn_the_Restaurant.webp'
import './Card.css'

function Card() {
    return (
        <div className='Card'>
            <img className='im'/>
            <div className="detail">
                <div className="detail_1">
                    <div className="name">
                        <h4>Domino's Pizza</h4>
                    </div>
                    <div className="rating">
                        <h4>3.4</h4>
                        <img alt=""/>
                    </div>
                </div>
                <div className="detail_2">
                    <div className="cuisine">
                        <h4>Pizza, Fast Food</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
