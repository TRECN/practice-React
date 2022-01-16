
import React from 'react'

class StarWars extends React.Component{

    constructor(){

        super()

        this.state={
            img:'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
            name:null,
            height:null,
            homeland:null,
            films:[]

        }
    }

    getCharacter=()=>{
        console.log('clicked')
    }

    render(){
        return(
            <div>
                <div className="">
                    <img src={this.state.img} height='300px'/>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.height}</p>
                    <p>{this.state.homeland}</p>
                    <ul>
                        <li>{this.state.films}</li>
                    </ul>
                </div>

                <button type='button' className='btn' onClick={()=>this.getCharacter()}>Randomize</button>
            </div>
        )
    }
}

export default StarWars