import React from 'react'
import img from './img.svg'
function Btn() {
    return (
        <div>
            <button className='btn'>
            <img src={img} alt=""/>
                Filters
            </button>
        </div>
    )
}

export default Btn
