import React from "react";
import egg from "../assets/egg.jpeg"

const Card = () =>{

    return (
        <> 
            <div className="container">
                <div className="card">
                    <img src={egg} style={{width:"85%"}}/>
                    <h1>EGG and Bread</h1>
                    <p className="price">Rs. 50.00/-</p>
                    <p><button>Order</button></p>
                </div>
            </div>
        </>
    )

}

export default Card