import React from 'react'

class Item extends React.Component{
    //for creating states
    constructor(props){
        super(props)
    }

    clickMe(){
        console.log("I was clicked",this.props.name)
    }
    render(){


      return(
        <h1 onClick={
           ()=>this.clickMe()}
        >Hello World {this.props.name}</h1>
      )
    }
  }

export default Item