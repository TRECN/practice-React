
import React from 'react'

class StarWars extends React.Component{

    constructor(){

        super()

        this.state={
            loaded:false,
            img:'',
            name:null,
            height:null,
            homeland:null,
            films:[]

        }
    }

    getCharacter=()=>{
        console.log('clicked')
        
        const url=`https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/1.json`
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    loaded:true,
                    img:data.image,
                    name:data.name,
                    height:data.height,
                    homeland:data.homeland,
                    films:[]
                })

            })
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