import React from 'react'
import Todo from './Todo'

const TodoList=props=>{
    return(
        <div>
            {props.tasks.todos.map(task=>(
                <Todo
                    key={task.id}
                    task={task}
                    toggleTask={props.toggleTask} 
                />
            ))}
            <button onClick={props.clearTasks}>Clear Completed</button>
        </div>
    )
}

export default TodoList