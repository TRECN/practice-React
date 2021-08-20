import React from 'react'
import Card from './Card'
import {cardObjone, cardObjtwo} from './Data'
function CardDisplay() {
    return (
        <div className='container' >
            <Card {...cardObjone}/>
            <Card {...cardObjtwo}/>
            <Card {...cardObjone}/>
            <Card {...cardObjone}/>
            <Card {...cardObjone}/>
            <Card {...cardObjone}/>
        </div>
    )
}

export default CardDisplay
