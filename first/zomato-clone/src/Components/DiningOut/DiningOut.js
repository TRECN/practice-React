import React from 'react'
import Btn from '../Btn/Btn'
import {Filters, Rating } from '../../Data'
import './DiningOut.css'


function DiningOut() {
    return (
        <>
            <div className='DiningOut'>
                <Btn {...Filters}/>
                <Btn {...Rating}/>
            </div>
        </>
    )
}

export default DiningOut
