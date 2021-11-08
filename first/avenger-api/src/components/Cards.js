import React from 'react'
import './Cards.css'
export default function Cards(
    data
) {
    console.log(data)
    return (
        
        <div className='cards'>
            <div className="thumbnail">
                <img src="" alt="" srcset="" />
            </div>

            <div className="name">
                <h1></h1>
            </div>
            <div className="lang">
                <h1></h1>
            </div>
            <div className="genres">
                <h1></h1>
            </div>
            <div className="runtime">
                <h1></h1>
            </div>
            <div className="premiered">
                <h1></h1>
            </div>
        </div>
    )
}
