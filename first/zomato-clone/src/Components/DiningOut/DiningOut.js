import React from 'react'
import Btn from '../Btn/Btn'
import {Distance, Dunki, Filters, Kaveri, Online, Outdoor, Prana, Rating } from '../../Data'
import './DiningOut.css'
import Card from '../Cards/Card'
function DiningOut() {
    return (
        <>
            <div className="Collections">
                <div className="heading1">
                    <h1>Collections</h1>
                </div>
                <div className="heading2">
                    <h3>Explore curated lists of top restaurants, cafes, pubs, and bars in ranchi,based on trends</h3>
                    <p className='all'>All collections in Ranchi</p>
                    <img className='arrow'/>
                </div>
                <div className="collects">
                    <div className="collect">
                        <img className="momo" />
                        <div className="hov">
                            <h2>Tranding This Week</h2>
                            <h3>23 places <img className='Warrow'/></h3>                           
                        </div>
                    </div>
                    <div className="collect">
                        <img className="cafe" />
                        <div className="hov">
                            <h2>Tranding This Week</h2>
                            <h3>23 places <img className='Warrow'/></h3>                           
                        </div>
                    </div>
                    <div className="collect">
                        <img className="coff" />
                        <div className="hov">
                            <h2>Tranding This Week</h2>
                            <h3>23 places <img className='Warrow'/></h3>                           
                        </div>
                    </div>
                    <div className="collect">
                        <img className="food" />
                        <div className="hov">
                            <h2>Tranding This Week</h2>
                            <h3>23 places <img className='Warrow'/></h3>                           
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className='DiningOut'>
                <Btn {...Filters}/>
                <Btn {...Rating}/>
                <Btn {...Distance}/>
                <Btn {...Online}/>
                <Btn {...Outdoor}/>
            </div>
            <div className="card_col">
                <div className="heading1">
                    <h1>Dine-Out Restaurants in Ranchi</h1>
                </div>
                <div className="Cards">
                    <Card {...Dunki}/>
                    <Card {...Kaveri}/>
                    <Card {...Prana}/>
                </div>
                <div className="Cards">
                    <Card {...Dunki}/>
                    <Card {...Kaveri}/>
                    <Card {...Prana}/>
                </div>
                <div className="Cards">
                    <Card {...Dunki}/>
                    <Card {...Kaveri}/>
                    <Card {...Prana}/>
                </div>
                <div className="Cards">
                    <Card {...Dunki}/>
                    <Card {...Kaveri}/>
                    <Card {...Prana}/>
                </div>
            </div>
        </>
    )
}

export default DiningOut
