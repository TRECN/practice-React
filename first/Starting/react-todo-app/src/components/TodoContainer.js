import React from "react";
class TodoContainer extends React.Component{
    
    state={
        todos:[
            {
                id:1,
                title:"setup development environment",
                completed:true
            },
            {
                id:2,
                title:"Develop website and add content",
                completed:false
            },
            {
                id:3,
                title:"Deploy to live server",
                completed:false
            }
        ]
    };

    render(){
        return(
            
            <div>
                <h1>
                    Hello from create React app
                </h1>
                <p>I am in a React Component!</p>
            </div>
        )
    }
}
export default TodoContainer;
