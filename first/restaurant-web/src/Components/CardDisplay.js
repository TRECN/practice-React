import React from 'react'
import Card from './Card'
import {cardObjone} from './Data'
function CardDisplay() {
    return (
        <div>
            <Card {...cardObjone}/>
        </div>
    )
}

export default CardDisplay
