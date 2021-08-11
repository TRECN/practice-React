import React from "react";
import egg from "../assets/egg.jpeg"

const Card = () =>{

    return (
        <>
            <div className="card">
                <img src={egg} style={{width:"85%"}}/>
                <h1>EGG and Bread</h1>
                <p className="price">Rs. 50.00/-</p>
                <p><button>Add to cart</button></p>
            </div>
        
        </>
    )

}

export default Card