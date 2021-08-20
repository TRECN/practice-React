import React from "react";
import svg from "../assets/egg.jpeg"
import svg1 from "../assets/Sandwich.jpg"
import svg2 from "../assets/Waffel.jpg"
import svg3 from "../assets/peggBread.jpg"
import svg4 from "../assets/fruitSalad.jpg"
import svg5 from "../assets/breakfast1.jpg"


const Card = (
    {
        product,
        price,
        btnName,
        img
    })=>{

         const setImg=()=>{
             if(img==='1')
                 return svg
             else
                 if(img==='2')
                     return svg1
             else
             if(img==='3')
                return svg2
             else
             if(img==='4')
               return svg3
               else
             if(img==='5')
               return svg4
               else
             if(img==='6')
               return svg5

         }
    return (
        <> 
            <div className="container">
                <div className="card">
                    <div className="imgContainer">
                        <img src={setImg()} style={{width:"85%"}}/>
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