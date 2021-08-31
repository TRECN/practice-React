import React from 'react'
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
    return (
        <div className='tabs'>
            <div className='section'>

            <Tab{...Delivery}/>
            <Tab {...Dining}/>
            <Tab {...Nightlife}/>
            <Tab {...Nutrition}/>
            </div>
        </div>
    )
}

export default Tabs
