import React from 'react'
import { Distance, Filters, Online, Outdoor, PranaN, Rating } from '../../Data'
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
                    
            </div>

        </>
    )
}

export default Nightlife
