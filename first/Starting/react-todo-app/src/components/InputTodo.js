import React from "react";

class InputTodo extends React.Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="add Todo..."/>
                <button>Submit</button>
            </form>
        )
    }
}
export default InputTodo