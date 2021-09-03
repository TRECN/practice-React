import React from 'react'
import Btn from '../Btn/Btn'
import {Distance, Filters, Rating } from '../../Data'
import './DiningOut.css'


function DiningOut() {
    return (
        <>
            <div className='DiningOut'>
                <Btn {...Filters}/>
                <Btn {...Rating}/>
                <Btn {...Distance}/>
            </div>
        </>
    )
}

export default DiningOut
