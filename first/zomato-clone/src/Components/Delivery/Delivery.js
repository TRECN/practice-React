import React from 'react'
import Btn from '../Btn/Btn'
import {Filters,Rating,SandH,PureVeg,DeliveryTime,GreatOffers} from '../../Data'
import './Delivery.css'
import Card from '../Cards/Card'
import {Dominos} from '../../Data'
function Delivery() {
    return (
        <>
        <div className='del' style={{backgroundColor:'transparent'}}>
            <Btn {...Filters}/>
            <Btn {...Rating}/>
            <Btn {...SandH}/>
            <Btn {...PureVeg}/>
            <Btn {...DeliveryTime}/>
            <Btn {...GreatOffers}/> 
        </div>
        <div className="card_col">
            <br />
            <div className="heading1">
                <h1>Best Food in Ranchi</h1>
            </div>
            <div className="Cards">
            <Card {...Dominos}/>
            <Card/>
            <Card/>
            </div>
            
            
        </div>
    </>
    )
}

export default Delivery
