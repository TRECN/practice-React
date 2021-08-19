import React from "react";
import egg from "../assets/egg.jpeg"

const Card = (
    {
        product,
        price,
        btnName,
        img
    })=>{

    return (
        <> 
            <div className="container">
                <div className="card">
                    <img src={egg} style={{width:"85%"}}/>
                    <h1>{product}</h1>
                    <p className="price">{price}</p>
                    <p><button>{btnName}</button></p>
                </div>
            </div>
        </>
    )

}

export default Card