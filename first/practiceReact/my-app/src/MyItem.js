import React from 'react'

class Item extends React.Component{
    //for creating states
    constructor(props){
        super(props)

        this.state={
            click:0
        }
    }

    clickMe(){
        this.setState({
            click:this.state.click +1,
        })
        console.log("I was clicked",this.props.name)
    }
    render(){


      return(
        <>
            <h1 onClick={
            ()=>this.clickMe()}
            >Hello World {this.props.name}</h1>

            <span>{}</span>
        </>
      )
    }
  }

export default Item