import React from 'react'
import logo from '../../assets/zomato.png'
import './Navbar.css'
import {GoLocation} from 'react-icons/go'
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
                        <GoLocation/>
                        <select className='dropdown'>
                            <option>rishabh</option>
                        </select>
                    </div>
                    <BsSearch/>
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
