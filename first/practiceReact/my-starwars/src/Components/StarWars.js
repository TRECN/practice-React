
import React from 'react'

class StarWars extends React.Component{

    constructor(){

        super()

        this.state={
            loaded:false,
            img:'',
            name:null,
            height:null,
            homeworld:null,
            wiki:null

        }
    }

    getCharacter=()=>{
        console.log('clicked')
        const random = Math.round(Math.random()*70)
        const url=`https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${random}.json`
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    loaded:true,
                    img:data.image,
                    name:data.name,
                    height:data.height,
                    homeworld:data.homeworld,
                    wiki:data.wiki
                })

            })
    }

    render(){
        return(
            <div>
                <div className="content">
                    <img className='image'src={this.state.img} height='300px'/>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.height}</p>
                    <p>{this.state.homeworld}</p>
                    <p className='wiki'><a href={this.state.wiki}>{this.state.wiki}</a></p>
                </div>

                <button type='button' className='btn' onClick={()=>this.getCharacter()}>Randomize</button>
            </div>
        )
    }
}

export default StarWars