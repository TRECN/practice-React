import React,{useState} from 'react'
import logo from '../../assets/zomato.png'
import './Navbar.css'
import {TiLocation} from 'react-icons/ti'
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import Tabs from '../Tabs/Tabs'
function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const myFunction=()=>{
        setNavbarOpen(!navbarOpen)
    }

    return (
        <>
            
            <div className='container'>
                
                <div className="img-container">
                    <a href="/">
                        <img src={logo} alt="Zomato" style={{width:'130px'}}/>
                    </a>
                </div>
                <div className="search-bar">
                    
                    <BsSearch className='search-icon'/>
                    <input type="text" placeholder='Search for restaurant, cuisine or dish' name="" className='search-text' />
                </div>
                <ul >
                    <li><a href="/">Log in</a></li>
                    <li><a href="/">Sign up</a></li>
                </ul>
            </div>
            

            <div className='container2'>
                <a className="bar-icon" onClick={myFunction}>
                    {navbarOpen?<FaTimes/>:<FaBars/>}
                </a>
                
                <div className="img-container">
                    <a href="/">
                        <img src={logo} alt="Zomato" style={{width:'130px'}}/>
                    </a>
                </div>
            </div>


            <div className={`container3 ${navbarOpen?'responsive':''}`}>
                <ul className='links'>
                    <li><a href="/">Log in</a></li>
                    <li><a href="/">Sign up</a></li>
                </ul>
                <div className="cont">
                    <div className="search-bar">
                        <div className="drop">
                            <TiLocation className='location-icon'/>
                            <select className='dropdown'>
                                <option>Ranchi</option>
                            </select>
                        </div>
                        <BsSearch className='search-icon'/>
                        <input type="text" placeholder='Search for restaurant, cuisine or dish' name="" className='search-text' />
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Navbar
