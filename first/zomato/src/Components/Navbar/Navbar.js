import React from 'react'
import logo from '../../assets/zomato.png'
import './Navbar.css'
function Navbar() {
    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img src={logo} alt="Zomato" style={{width:'100px'}}/>
                </div>
                <div className="search-bar">
                    <img src="" alt="location" />
                    <select>
                        <option>rishabh</option>
                    </select>
                    <img src="" alt="search" />
                    <input type="text" name="" id="" />
                </div>

            </div>
        </>
    )
}
export default Navbar
