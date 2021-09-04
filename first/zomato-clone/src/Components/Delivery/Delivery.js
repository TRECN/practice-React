import React from 'react'
import Btn from '../Btn/Btn'
import {Filters,Rating,SandH,PureVeg,DeliveryTime,GreatOffers} from '../../Data'
import './Delivery.css'
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
    </>
    )
}

export default Delivery
