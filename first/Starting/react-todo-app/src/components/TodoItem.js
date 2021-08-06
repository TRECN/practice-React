import React from "react"
import styles from "./TodoItem.module.css"

handleEditing = () =>{
    console.log("edit mode activated");
}

function TodoItem(props){
    const completedStyle={
        fontStyle:"italic",
        color:"#595959",
        opacity:0.4,
        textDecoration:"line-through",

    }
    const {completed, id, title} = props.todo;
    return (
        <li className={styles.item}>
            <div onDoubleClick={this.handleEditing}>
                <input type="checkbox" 
                className={styles.checkbox}
                checked={completed}
                onChange={()=>props.handleChangeProps(id)}
                />
                <button onClick={()=>props.deleteTodoProps(id)}>
                    delete
                </button>
                <span style={completed ? completedStyle:null}>
                    {title}<br/>
                </span>
            </div>
        </li>
    )
}
export default TodoItem