import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "./context/Context";
import styles from './Todo.module.css'

const Todo = ({item, onUpdate, onDelete})=> {

    const {title, setTitle} = useContext(Context)
    
    const [isEdit, setIsEdit] = useState(false)

     function FormEdit() {
        const [newValue, setNewValue] = useState(title);

        function handleSubmit (e){
            e.preventDefault();
        }

        function handleChange(e) {
                const value = e.target.value
                setNewValue(value)
            }

        function handleClickUpdateTodo(){
                onUpdate(item.id, newValue)
                setIsEdit(false)
            }

        return <form className={styles.updateContainer} onSubmit={handleSubmit}>
            <input className={styles.updatePlacer} placeholder='Update your task.' onChange={handleChange}/>
            <button className={styles.updateButton} onClick={handleClickUpdateTodo}>Update</button>
        </form>
        
    }
   
    function TodoElement() {
        return  <div className={styles.taskContainer}> 
                    <span className={styles.todoTitle}>{item.title} </span>
                        <div className={styles.buttonContainer}>
                            <button className={styles.editButton} onClick={() => setIsEdit(true)}>Editar</button>
                            <button className={styles.deleteButton} onClick={(e) =>  onDelete(item.id)}>Eliminar</button> 
                        </div>
                </div>
                
    }

    return(
        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>}  
        </div>
       
    )
    
}

export default Todo;