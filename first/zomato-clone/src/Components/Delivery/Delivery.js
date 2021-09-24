import React from 'react'
import Btn from '../Btn/Btn'
import {Filters,Rating,SandH,PureVeg,DeliveryTime,GreatOffers, Punjabi} from '../../Data'
import './Delivery.css'
import Card from '../Cards/Card'
import {Dominos,Jashn} from '../../Data'
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
        <div className="insp">
            <div className="heading1">
                <h1>Inspiration for your first order</h1>
            </div>
            <div className="Insp">
            <div className="inspD">
                <img className='inspI paneer'/>
                <h3>Paneer</h3>
            </div>
            <div className="inspD">
                <img className='inspI chicken'/>
                <h3>Chicken</h3>
            </div>
            <div className="inspD">
                <img className='inspI Biryani'/>
                <h3>Biryani</h3>
            </div>
            <div className="inspD">
                <img className='inspI Pizza'/>
                <h3>Pizza</h3>
            </div>
            
            </div>
        </div>
        <div className="card_col">
            <br />
            <div className="heading1">
                <h1>Delivery Resrtaurants in Ranchi</h1>
            </div>
            <div className="Cards">
            <Card {...Dominos}/>
            <Card {...Jashn}/>
            <Card {...Punjabi}/>
            </div>
            <div className="Cards">
            <Card {...Punjabi}/>
            <Card {...Dominos}/>
            <Card {...Jashn}/>
            </div>
            
            
            
        </div>
    </>
    )
}

export default Delivery
