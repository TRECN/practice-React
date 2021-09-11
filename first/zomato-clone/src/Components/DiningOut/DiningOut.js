import React from 'react'
import Btn from '../Btn/Btn'
import {Distance, Filters, Online, Outdoor, Rating } from '../../Data'
import './DiningOut.css'


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
                
            </div>
        </>
    )
}

export default DiningOut
