import React from 'react'
import './Btn.css'
function Btn({
    img,
    name
}) {
    return (
        <div>
            <button className='btn'>
                <img className={img}/>
                {name}
            </button>
        </div>
    )
}

export default Btn
