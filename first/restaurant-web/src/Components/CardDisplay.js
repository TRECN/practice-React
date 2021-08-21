import React from 'react'
import Card from './Card'
import {cardObjone, cardObjtwo,cardObjthree,cardObjfour,cardObjfive,cardObjsix} from './Data'
function CardDisplay() {
    return (
        <div className='container' >
            <Card {...cardObjone}/>

        </div>
    )
}

export default CardDisplay
