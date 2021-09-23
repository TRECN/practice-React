import React, { useState } from 'react'
import Tab from './Tab/Tab'
import './Tabs.css'
import {
    Delivery,
     Dining,
      Nightlife,} from '../../../src/Data'
function Tabs() {


    return (
        <div className='tabs'>
            <div className='section'>
            <Tab {...Delivery}/>
            <Tab {...Dining}/>
            <Tab {...Nightlife}/>
            </div>
        </div>
    )
}

export default Tabs
