import React from 'react'
import delivery_active from '../../../assets/tabs/delivery_active.webp'
import './Tab.css'
function Tab() {
    return (
        <div className='tab'>
            <div className="logo">
                <img src={delivery_active} className='img'/>
            </div>
            <div className="heading">
                <div>Delivery</div>
            </div>
        </div>
    )
}

export default Tab
