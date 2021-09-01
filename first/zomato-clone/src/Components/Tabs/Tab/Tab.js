import React, { useState } from 'react'
import delivery_active from '../../../assets/tabs/delivery_active.webp'
import './Tab.css'
const Tab=(
    {
        img,
        head,
        img1,

    }
) =>{

    const [Click, setClick]=useState(false);

    const handleClick=()=>{
        setClick(!Click)
    }

    return (
        <section className="conta" onClick={handleClick}>
            <div className='tab'>
                <div className={`logo  ${Click?img1:img}`}>
                    <img className={`img`}/>
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
