import React from 'react'
import Tab from './Tab/Tab'
import './Tabs.css'
import {
    Delivery_active,
     Dining_active,
      Nightlife_active,
       Nutrition_active} from '../Tabs/Tab/Data'
function Tabs() {
    return (
        <div className='tabs'>
            <Tab {...Delivery_active}/>
            <Tab {...Dining_active}/>
            <Tab {...Nightlife_active}/>
            <Tab {...Nutrition_active}/>
        </div>
    )
}

export default Tabs
