import React from 'react'
import logo from '../../assets/zomato.png'
import './Navbar.css'
import {TiLocation} from 'react-icons/ti'
import {BsSearch} from 'react-icons/bs'
function Navbar() {
    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img src={logo} alt="Zomato" style={{width:'100px'}}/>
                </div>
                <div className="search-bar">
                    <div className="drop">
                        <TiLocation className='location-icon'/>
                        <select className='dropdown'>
                            <option>rishabh</option>
                        </select>
                    </div>
                    <BsSearch className='search-icon'/>
                    <input type="text" name="" id="" />
                </div>
                <ul>
                    <li><a href="/">Log in</a></li>
                    <li><a href="/">Sign up</a></li>
                </ul>
            </div>
        </>
    )
}
export default Navbar
