
import React from 'react'

class StarWars extends React.Component{

    constructor(){

        super()

        const state={
            img:null,
            name:null,
            height:null,
            homeland:null,
            films:[]

        }
    }


    render(){
        return(
            <div className="">
                <img src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"height='300px'/>
                <h1>Luke Skywalker</h1>
                <p>Height</p>
                <p>HomeLand</p>
                <ul>
                    <li>films</li>
                </ul>
            </div>
        )
    }
}

export default StarWars