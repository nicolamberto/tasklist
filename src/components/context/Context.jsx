
import React, {createContext} from "react";
import { useState } from "react";


export const Context = createContext();

const ContextProvider = ({children}) => {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);


    return (
        <Context.Provider value={{title, setTitle, todos, setTodos}}>
            {children}
        </Context.Provider>
    )
}


export default ContextProvider;
