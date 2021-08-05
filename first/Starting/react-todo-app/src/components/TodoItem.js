import React from "react"
import styles from "./TodoItem.module.css"
function TodoItem(props){
    return (
        <li className={styles.item}>
            <input type="checkbox" 
            className={styles.checkbox}
            checked={props.todo.completed}
            onChange={()=>props.handleChangeProps(props.todo.id)}/>
            <button onClick={()=>props.deleteTodoProps(props.todo.id)}>
                delete
            </button>
            {props.todo.title}<br/>
        
        </li>
    )
}
export default TodoItem