import React from 'react'

class Item extends React.Component{
    //for creating states
    constructor(props){
        super(props)

        this.state={
            click:0,
            name:'rishabh123'
        }
        
    }

    clickMe(){
        this.setState({
            click:this.state.click +1,
            name:"raj"

        });
        console.log("I was clicked",this.props.name)
    }
    render(){


      return(
        <>
            <h1 onClick={
            ()=>this.clickMe()}
            >Hello World {this.state.name}</h1>

            <span>{this.state.click} is the number of clicks</span>
        </>
      )
    }
  }

export default Item