import React from 'react'
import Btn from '../Btn/Btn'
import {Distance, Dominos, Filters, Online, Outdoor, Rating } from '../../Data'
import './DiningOut.css'
import Card from '../Cards/Card'


function DiningOut() {
    return (
        <>
            <div className='DiningOut'>
                <Btn {...Filters}/>
                <Btn {...Rating}/>
                <Btn {...Distance}/>
                <Btn {...Online}/>
                <Btn {...Outdoor}/>
            </div>
            <div className="card_col">
                <div className="heading1">
                    <h1>Dine-Out Restaurants in Ranchi</h1>
                </div>
                <div className="Cards">
                    <Card {...Dominos}/>
                </div>
            </div>
        </>
    )
}

export default DiningOut
