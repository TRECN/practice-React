import React from 'react'
import { Distance, Filters, Online, Outdoor, PranaN, Rating, tub, TUB, Wine } from '../../Data'
import Btn from '../Btn/Btn'
import Card from '../Cards/Card'
import './Nightlife.css'

function Nightlife() {
    return (
        <>
            <div className='nightlife'>
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
                <Card {...tub}/>
                <Card {...Wine}/>  
            </div>
            <div className="Cards">
                <Card {...PranaN}/>
                <Card {...tub}/>
                <Card {...Wine}/>  
            </div>

        </>
    )
}

export default Nightlife
