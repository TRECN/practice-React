import React, { useState } from "react"
import "./navbar.css"

const Navbar =()=>{
    const [navbarOpen, setNavbarOpen] = useState(false);
    const myFunction=()=>{
        setNavbarOpen(!navbarOpen)
    }

    return (
        <>
            <div className={`topnav ${navbarOpen?"responsive":""}`} id="myTopnav">
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a className="icon" onClick={myFunction}>
                <i class="fa fa-bars"></i>
                </a>
            </div>
        </>
    );
}

export default Navbar