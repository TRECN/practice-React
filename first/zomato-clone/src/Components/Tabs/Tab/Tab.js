import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import delivery_active from '../../../assets/tabs/delivery_active.webp'
import './Tab.css'
const Tab=(
    {
        img,
        head,
        head_C,
        img1,

    }
) =>{

    const [Click, setClick]=useState(false);

    const handleClick=()=>{
        setClick(!Click)
    }

    return (
        <Link to='/delivery' className="conta" onClick={handleClick}>
            <div className='tab'>
                <div className={`logo  ${Click?img1:img}`}>
                    <img className={`img`}/>
                </div>
                <div className={`head ${Click?head_C:''}`}>
                    <p className='heading'>{head}</p>
                </div>
            </div> 
            <div className={`${Click?'hr_red':'hr_gray'}`}>
                <hr/>
            </div>
        </Link>
    )
}

export default Tab
