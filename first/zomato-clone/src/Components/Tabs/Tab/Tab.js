import React, { useState } from 'react'
import delivery_active from '../../../assets/tabs/delivery_active.webp'
import './Tab.css'
const Tab=(
    {
        img,
        head,

    }
) =>{

    const [Click, setClick]=useState(false);

    return (
        <section className="conta">
            <div className='tab'>
                <div className="logo">
                    <img src={img} className='img'/>
                </div>
                <div className="head">
                    <p className='heading'>{head}</p>
                </div>
            </div>
        <hr />
        </section>
    )
}

export default Tab
