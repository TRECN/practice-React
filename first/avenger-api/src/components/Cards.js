import React, { useEffect, useState } from 'react'
import './Cards.css'
export default function Cards(
    json
) {
    const [data,setData]=useState({});
    const [show,setShow]=useState({});
    useEffect(()=>{
        setData(json)
    },[data])
    useEffect(()=>{
        setShow(json.show);
    },[show])
    useEffect(()=>{
        setTimeout(()=>{
            console.log(data);
            console.log(show);
        },2000)
        
    },[data,show])
    
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
