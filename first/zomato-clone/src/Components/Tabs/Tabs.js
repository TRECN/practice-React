import React, { useState } from 'react'
import Tab from './Tab/Tab'
import './Tabs.css'
import {
    Delivery,
    Delivery_active,
     Dining,
     Dining_active,
      Nightlife,
      Nightlife_active,
       Nutrition,
       Nutrition_active} from '../Tabs/Tab/Data'
function Tabs() {
    const [click,setclick]=useState(false);

    const handleClick=()=>{
        if(click)
            return Delivery_active
        else
            return Delivery
    }

    return (
        <div className='tabs'>
            <div className='section'>

            <Tab {handleClick}/>
            <Tab {...Dining}/>
            <Tab {...Nightlife}/>
            <Tab {...Nutrition}/>
            </div>
        </div>
    )
}

export default Tabs
