import React from 'react'
import delivery_active from '../../../assets/tabs/delivery_active.webp'
import './Tab.css'
const Tab=(
    {
        img,
        head,
        
    }
) =>{
    return (
        <div className="conta">
        <div className='tab'>
            <div className="logo">
                <img src={delivery_active} className='img'/>
            </div>
            <div className="head">
                <div className='heading'>Delivery</div>
            </div>
        </div>
        <hr />
        </div>
    )
}

export default Tab
