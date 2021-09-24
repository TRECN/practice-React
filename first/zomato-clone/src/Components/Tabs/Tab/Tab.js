import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Tab.css'
const Tab=(
    {
        img,
        head,
        head_C,
        img1,
        add,
        C_add,
        C_add1
    }
) =>{


    const handleClick=()=>{
        setClick(!Click)
        t=window.location.href
        refreshPage()
    }
    useEffect(() => {     
        t=window.location.href
        console.log(t)
    })

    return (
        <Link to={add} className="conta" onClick={handleClick}>
            <div className='tab'>
                <div className={`logo  ${((t===C_add)||(t===C_add1))?img1:img}`}>
                    <img className={`img`}/>
                </div>
                <div className={`head ${((t===C_add)||(t===C_add1))?head_C:''}`}>
                    <p className='heading'>{head}</p>
                </div>
            </div> 
            <div className={`${((t===C_add)||(t===C_add1))?'hr_red':'hr_gray'}`}>
                <hr/>
            </div>
        </Link>
    )
}
export default Tab
