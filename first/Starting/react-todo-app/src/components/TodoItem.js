import React from "react"
import styles from "./TodoItem.module.css"


const state={
    editing:false,
}
const handleEditing=()=>{
    this.setState({
        editing:true,
    })
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
            <div onDoubleClick={handleEditing}>
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
            <input type="text" className={styles.textInput}/>
        </li>
    )
}
export default TodoItem