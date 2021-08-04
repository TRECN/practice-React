import React from "react";
//importing TodoItem.js
import TodoItem from "./TodoItem"
class TodosList extends React.Component{
    render(){
        return(
            <ul>
                {
                    this.props.todos.map(todo=>(
                        <TodoItem key={todo.id}todo={todo}/>
                    ))
                }
            </ul>
        )
    }
}
export default TodosList;