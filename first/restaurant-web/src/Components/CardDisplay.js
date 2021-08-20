import React from 'react'
import Card from './Card'
import {cardObjone, cardObjtwo,cardObjthree} from './Data'
function CardDisplay() {
    return (
        <div className='container' >
            <Card {...cardObjone}/>
            <Card {...cardObjtwo}/>
            <Card {...cardObjthree}/>
            <Card {...cardObjone}/>
            <Card {...cardObjone}/>
            <Card {...cardObjone}/>
        </div>
    )
}

export default CardDisplay
