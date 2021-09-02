import React from 'react'
import Btn from './Btn'
import {Filters} from '../../Data'
function Delivery() {
    return (
        <div className='delivery'>
            <Btn {...Filters}/>
        </div>
    )
}

export default Delivery
