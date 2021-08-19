import React from 'react'
import Card from './Card'
import {cardObjone} from './Data'
function CardDisplay() {
    return (
        <div className='container'>
            <Card {...cardObjone}/>
            <Card {...cardObjone}/>
        </div>
    )
}

export default CardDisplay
