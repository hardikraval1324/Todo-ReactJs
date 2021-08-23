import React, {useState} from 'react'
import Todoform from './Todoform'

function Todolist() {
    const[todos, setTodos] =useState([]);


    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    };
    return (
        <div>
           <h1>Hey plan your day !</h1> 
           <Todoform onSubmit={addTodo} />
        </div>
    )
}

export default Todolist
