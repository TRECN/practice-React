import React from 'react'
import delivery_active from '../../../assets/tabs/delivery_active.webp'
function Tab() {
    return (
        <div>
            <div className="logo">
                <img src={delivery_active} alt="" />
            </div>
            <div className="heading">
                <h1>Delivery</h1>
            </div>
        </div>
    )
}

export default Tab
