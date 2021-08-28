import React from 'react'
import Tab from './Tab/Tab'
import './Tabs.css'
import {TabObjone,TabObjtwo,TabObjthree,TabObjfour} from '../Tabs/Tab/Data'
function Tabs() {
    return (
        <div className='tabs'>
            <Tab {...TabObjone}/>
            <Tab {...TabObjtwo}/>
            <Tab />
        </div>
    )
}

export default Tabs
