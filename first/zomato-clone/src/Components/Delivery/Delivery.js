import React from 'react'
import Btn from './Btn'
import {Filters} from '../../Data'
function Delivery() {
    return (
        <div className='delivery' style={{backgroundColor:'transparent'}}>
            <Btn {...Filters}/>
        </div>
    )
}

export default Delivery
