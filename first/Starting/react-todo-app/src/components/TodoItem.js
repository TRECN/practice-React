import React from "react"
import styles from "./TodoItem.module.css"



class TodoItem extends React.Component{
    handleEditing = () =>{
        console.log("edit mode activated");
    }
    render(){
    const completedStyle={
        fontStyle:"italic",
        color:"#595959",
        opacity:0.4,
        textDecoration:"line-through",

    }
    const {completed, id, title} = this.props.todo;
    
    return (
        <li className={styles.item}>
            <div onDoubleClick={this.handleEditing}>
                <input type="checkbox" 
                className={styles.checkbox}
                checked={completed}
                onChange={()=>this.props.handleChangeProps(id)}
                />
                <button onClick={()=>this.props.deleteTodoProps(id)}>
                    delete
                </button>
                <span style={completed ? completedStyle:null}>
                    {title}<br/>
                </span>
            </div>
        </li>
    )}
}
export default TodoItem