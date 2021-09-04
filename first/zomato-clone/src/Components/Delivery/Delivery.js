import React from 'react'
import Btn from '../Btn/Btn'
import {Filters,Rating,SandH,PureVeg,DeliveryTime,GreatOffers} from '../../Data'
import './Delivery.css'
function Delivery() {
    return (
        <>
        <div className='del' style={{backgroundColor:'transparent'}}>
            <Btn {...Filters}/>
            <img alt="Restaurant Card" src="https://b.zmtcdn.com/data/pictures/9/2700489/bdc6c1bbaed2ae53c1e3c4b303a3e5d0_o2_featured_v2.jpg" loading="lazy" class="sc-s1isp7-5 fyZwWD"></img>

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
