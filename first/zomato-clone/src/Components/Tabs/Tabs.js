import React from 'react'
import Tab from './Tab/Tab'
import './Tabs.css'
import {TabObjone,TabObjtwo,TabObjthree,TabObjfour, Delivery} from '../Tabs/Tab/Data'
function Tabs() {
    return (
        <div className='tabs'>
            <Tab {...Delivery}/>
            <Tab {...TabObjtwo}/>
            <Tab {...TabObjthree}/>
            <Tab {...TabObjfour}/>
        </div>
    )
}

export default Tabs
