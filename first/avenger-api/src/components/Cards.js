import React, { useEffect, useState } from 'react'
import './Cards.css'
export default function Cards(
    data
) {
    const [show,setShow]=useState({});
    useEffect(()=>{
        setShow(data)
    },[show])


    return (
        
        <div className='cards'>
            <div className="thumbnail">
                <img src="" alt="" srcset="" />
            </div>

            <div className="name">
                <h1>a</h1>
            </div>
            <div className="lang">
                <h1>a</h1>
            </div>
            <div className="genres">
                <h1>a</h1>
            </div>
            <div className="runtime">
                <h1>a</h1>
            </div>
            <div className="premiered">
                <h1>a</h1>
            </div>
        </div>
    )
}
