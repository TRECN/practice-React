import React from "react"
function TodoItem(props){
    return <li>
        <input type="checkbox" 
        checked={props.todo.completed}
        onChange={()=>props.handleChangeProps(props.todo.id)}/>
        <button onClick={()=>props.deleteTodoProps(props.todo.id)}>
            delete
            </button>
        {props.todo.title}<br/>
        
        </li>
}
export default TodoItem