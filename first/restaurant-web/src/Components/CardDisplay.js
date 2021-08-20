import React from 'react'
import Card from './Card'
import {cardObjone, cardObjtwo,cardObjthree,cardObjfour,cardObjfive,cardObjsix} from './Data'
function CardDisplay() {
    return (
        <div className='container' >
            <Card {...cardObjone}/>
            <Card {...cardObjtwo}/>
            <Card {...cardObjthree}/>
            <Card {...cardObjfour}/>
            <Card {...cardObjfive}/>
            <Card {...cardObjsix}/>
        </div>
    )
}

export default CardDisplay
