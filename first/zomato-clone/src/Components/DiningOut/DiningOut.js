import React from 'react'
import Btn from '../Btn/Btn'
import {Filters, Rating } from '../../Data'

function DiningOut() {
    return (
        <>
            <div>
                <Btn {...Filters}/>
                <Btn {...Rating}/>
            </div>
        </>
    )
}

export default DiningOut
