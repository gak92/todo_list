import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3>Todos List</h3>
            {
                props.todos.length===0? "No Todos to Display": 
                props.todos.map((todo)=>{
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
                })
            }
            {/* <TodoItem todo={props.todos[0]}/> */}
        </div>
    )
}
