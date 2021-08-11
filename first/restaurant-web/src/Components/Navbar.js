import React from "react"

const Navbar =()=>{
    return (
        <>
            <div className="topnav" id="myTopnav">
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a>
                <i class="fa fa-bars"></i>
                </a>
            </div>
        </>
    );
}

export default Navbar