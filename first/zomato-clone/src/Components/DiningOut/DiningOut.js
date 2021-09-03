import React from 'react'
import Btn from '../Btn/Btn'
import {Filters } from '../../Data'

function DiningOut() {
    return (
        <>
            <div>
                <Btn {...Filters}/>
                <Btn />
                <Btn />
                <Btn />
                <Btn />
                <Btn />
            </div>
        </>
    )
}

export default DiningOut
