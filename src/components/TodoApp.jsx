import React, { useState } from "react";
import Todo from "./Todo";
import styles from './TodoApp.module.css'


const TodoApp = ()=> {

    const [title, setTitle] = useState("")
    const [todos, setTodos] = useState([])

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
            }


        setTodos([...todos, newTodo]);

        setTitle("")
    }

    function handleUpdate(id, value) {
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos(temp)
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp)
    }
    

    return (
        <div>
            <form className={styles.todoContainer} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input onChange={handleChange} placeholder='Create your task.' className={styles.todoInput} value={title}/>
                    <input onClick={handleSubmit} type="submit" value="Create task." className={styles.submitButton}/>
                </div>
                
                <div className="todosContainer">
                {
                    todos.map((item)=>(
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
            </form>
            
        </div>
    )
}

export default TodoApp;