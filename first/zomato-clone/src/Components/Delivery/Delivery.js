import React from 'react'
import Btn from '../Btn/Btn'
import {Filters,Rating,SandH,PureVeg,DeliveryTime,GreatOffers, Punjabi} from '../../Data'
import './Delivery.css'
import Card from '../Cards/Card'
import {Dominos,Jashn} from '../../Data'
import pan from '../../assets/cards/paneer.jpg'
function Delivery() {
    return (
        <>
        <div className="insp">
            <div className="paneer">
                <img src={pan} className='inspI'/>
                
            </div>
        </div>
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
            <Card {...Jashn}/>
            <Card {...Punjabi}/>
            </div>
            <div className="Cards">
            <Card {...Punjabi}/>
            <Card {...Dominos}/>
            <Card {...Jashn}/>
            </div>
            <div className="Cards">
            <Card {...Jashn}/>
            <Card {...Punjabi}/>
            <Card {...Dominos}/>
            </div>
            <div className="Cards">
            <Card {...Punjabi}/>
            <Card {...Jashn}/>
            <Card {...Dominos}/>
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
