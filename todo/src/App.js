import React, {useState, useReducer} from 'react';
import { reducer, initialState } from './reducers/reducer';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [state, dispatch]=useReducer(reducer,initialState)
  const [task, setTask]=useState("")

  const handleInput=e=>{
    setTask(e.target.value)
  }

  const handleSubmit=e=>{
    e.preventDefault();
    dispatch({type: "ADD_TODO", payload: task})
  }

  const toggleTask=toggle=>{
    dispatch({type: "TOGGLE_TODO", payload: toggle})
  }

  const clearTasks=()=>{
    dispatch({type: "CLEAR_TODO"})  
  }

  return (
    <div className="App">
        <h1>Todo App</h1>
        <h2>Todo List</h2>
        <TodoList 
          tasks={state}
          toggleTask={toggleTask}
          clearTasks={clearTasks}
        />
        <h2>Add Task</h2>
        <TodoForm
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
    </div>
  );
}

export default App;
