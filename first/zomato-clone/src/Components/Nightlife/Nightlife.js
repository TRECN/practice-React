import React from 'react'
import { Distance, Filters, Online, Outdoor, Rating } from '../../Data'
import Btn from '../Btn/Btn'
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
        </>
    )
}

export default Nightlife
