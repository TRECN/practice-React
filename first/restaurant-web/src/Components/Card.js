import React from "react";
import svg from "../assets/egg.png"
import svg1 from "../assets/Sandwich.png"
import svg2 from "../assets/Waffel.png"
import svg3 from "../assets/Coffee.png"
import svg4 from "../assets/fruitSalad.png"
import svg5 from "../assets/breakfast1.png"


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
                <div className="card">
                    <div className="card-container">
                        <img src={setImg()} style={{width:"85%"}}/>
                        
                    </div>
                    <div className="text-Container">
                            <h1>{product}</h1>
                            <p className="price">{price}</p>
                    </div>
                    <button>{btnName}</button>
                </div>
        </>
    )

}

export default Card