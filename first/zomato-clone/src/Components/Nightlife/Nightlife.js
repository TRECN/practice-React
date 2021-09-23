import React from 'react'
import { Distance, Filters, Online, Outdoor, PranaN, Rating, tub, TUB, Wine } from '../../Data'
import Btn from '../Btn/Btn'
import Card from '../Cards/Card'
import './Nightlife.css'

function Nightlife() {
    return (
        <>
            <div className='night'>
                <Btn {...Filters}/>
                <Btn {...Rating}/>
                <Btn {...Distance}/>
                <Btn {...Online}/>
                <Btn {...Outdoor}/>
            </div>
            <div className="Cards">
                <Card {...PranaN}/>
                <Card {...tub}/>
                <Card {...Wine}/>  
            </div>
            <div className="Cards">
                <Card {...PranaN}/>
                <Card {...Wine}/>  
                <Card {...tub}/>
                
            </div>
            <div className="Cards">
                <Card {...tub}/>
                <Card {...PranaN}/>
                <Card {...Wine}/>  
            </div>

        </>
    )
}

export default Nightlife
