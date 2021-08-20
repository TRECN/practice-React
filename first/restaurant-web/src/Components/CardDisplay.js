import React from 'react'
import Card from './Card'
import {cardObjone, cardObjtwo,cardObjthree,cardObjfour,cardObjfive} from './Data'
function CardDisplay() {
    return (
        <div className='container' >
            <Card {...cardObjone}/>
            <Card {...cardObjtwo}/>
            <Card {...cardObjthree}/>
            <Card {...cardObjfour}/>
            <Card {...cardObjfive}/>
            <Card {...cardObjone}/>
        </div>
    )
}

export default CardDisplay
