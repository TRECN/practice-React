import React from 'react'
import Btn from './Btn'
import {Filters,Rating,SandH,PureVeg,DeliveryTime,GreatOffers} from '../../Data'
import './Delivery.css'
function Delivery() {
    return (
        <div className='delivery' style={{backgroundColor:'transparent'}}>
            <Btn {...Filters}/>
            <Btn {...Filters}/>
            <Btn {...Filters}/>
            <Btn {...Filters}/>
            <Btn {...Filters}/>
            <Btn {...Filters}/>
        </div>
    )
}

export default Delivery
