import React,{useState, useEffect} from "react";
//importing Header
import Header from "./Header";

//importing TodosList
import TodosList from "./TodosList";

//importing InputTodo
import InputTodo from "./InputTodo";

//importing uuid
import {v4 as uuidv4} from "uuid";
const TodoContainer =()=>{
    
    const [todos, setTodos]=useState([])
    
    const handleChange=(id)=>{
        setTodos(prevState => 
            prevState.map(todo => {
              if (todo.id === id) {
                return{
                    ...todo,
                    completed: !todo.completed,
                }
              }
              return todo
            })
        )
    };
    const delTodo=(id)=>{
        setTodos([
            ...todos.filter(todo=>{               
                return todo.id!==id;
            }),
        ])
    };

    const addTodoItem=title=>{
        const newTodo={
            id: uuidv4(),
            title:title,
            completed:false,
        }
        setTodos([
            ...todos, newTodo
        ])
    };

    const setUpdate=(updatedTitle,id)=>{
        setTodos(
            todos.map(todo=>{
                if(todo.id===id){
                    todo.title=updatedTitle
                }
                return todo
            })
        )

    }

    // useEffect(()=>{
    //     console.log("test run")

    //     //getting stored items
    //     const temp =localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)

    //     if(loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // },[setTodos])

    useEffect(()=>{
        //storing todos item
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos",temp)

    },[todos])

    return(
        <div className="container">
            <div className="inner">
                <Header/>
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList
                todos={this.state.todos}
                handleChangeProps={this.handleChange} 
                deleteTodoProps={this.delTodo}
                setUpdate={this.setUpdate}/>
            </div>
        </div>
    );
}

export default TodoContainer;
