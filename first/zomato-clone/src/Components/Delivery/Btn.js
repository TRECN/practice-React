import React from 'react'
import './Btn.css'
function Btn({
    img,
    name
}) {
    return (
        <div>
            <button className='btn'>
                <img src={img} alt=""/>
                {name}
            </button>
        </div>
    )
}

export default Btn
