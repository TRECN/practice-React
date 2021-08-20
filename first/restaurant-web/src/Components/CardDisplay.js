import React from 'react'
import Card from './Card'
import {cardObjone, cardObjtwo,cardObjthree,cardObjfour} from './Data'
function CardDisplay() {
    return (
        <div className='container' >
            <Card {...cardObjone}/>
            <Card {...cardObjtwo}/>
            <Card {...cardObjthree}/>
            <Card {...cardObjfour}/>
            <Card {...cardObjone}/>
            <Card {...cardObjone}/>
        </div>
    )
}

export default CardDisplay
