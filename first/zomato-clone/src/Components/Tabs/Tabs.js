import React from 'react'
import Tab from './Tab/Tab'
import './Tabs.css'
import {Delivery, Dining, Nightlife} from '../Tabs/Tab/Data'
function Tabs() {
    return (
        <div className='tabs'>
            <Tab {...Delivery}/>
            <Tab {...Dining}/>
            <Tab {...Nightlife}/>
            <Tab {...}/>
        </div>
    )
}

export default Tabs
