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
                    <GoLocation/>
                    <select>
                        <option>rishabh</option>
                    </select>
                    <BsSearch/>
                    <input type="text" name="" id="" />
                </div>
                
            </div>
        </>
    )
}
export default Navbar
