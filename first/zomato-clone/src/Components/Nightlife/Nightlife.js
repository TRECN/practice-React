import React from 'react'
import { Distance, Filters, Online, Outdoor, Rating } from '../../Data'
import Btn from '../Btn/Btn'
import './Nightlife.css'

function Nightlife() {
    return (
        <>
            <div className='nightlife'>
                <Btn {...Filters}/>
                <Btn {...Rating}/>
                <Btn {...Distance}/>
                <Btn {...Online}/>
                <Btn {...Outdoor}/>
            </div>
            <div className="Cards">
            <div class="parent">
  <img src="http://www.gstatic.com/webp/gallery/1.webp" />
  <span class="overlay">OVERLAY</span>
</div>
            </div>
        </>
    )
}

export default Nightlife
