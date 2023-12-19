import { useRecoilState } from "recoil"
import { todoState } from "../state/atoms/TodoState"
import { useState } from "react";
import Todo from "./Todo";

export default function Todos() {
    const [todos,setTodos] = useRecoilState(todoState)
    const [inputText,setInputText] = useState('')

    function addTodo() {
        setTodos((prevTodos) => [...prevTodos,{id:Math.random(), text:inputText}]);
        setInputText('')
    }

    function handleInputChange(e) {
        setInputText(e.target.value)
    }

    function clearTodos() {
        setTodos([])
    }
    console.log({todos})

    return (
        <main>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearTodos}>Clear Todos</button>
            {
                todos.map((todo) => {
                    return <Todo key={todo.id} text={todo.text} id={todo.id} />
                })
            }
        </main>
    )
}