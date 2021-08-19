import React from "react";
import egg from "../assets/egg.jpeg"

const Card = (
    {
        product,
        price,
        btnName,
        img
    })=>{

        // const setImg=()=>{
        //     if(img==='1')
        //         return svg
        //     else
        //         if(img==='2')
        //             return svg1
        //     else
        //     if(img==='3')
        //         return svg2
        //     else
        //     if(img==='4')
        //         return svg3
        // }
    return (
        <> 
            <div className="container">
                <div className="card">
                    <div className="imgContainer">
                        <img src={egg} style={{width:"85%"}}/>
                    </div>
                    <h1>{product}</h1>
                    <p className="price">{price}</p>
                    <p><button>{btnName}</button></p>
                </div>
            </div>
        </>
    )

}

export default Card