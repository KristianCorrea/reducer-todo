import React from 'react'

const TodoForm = props =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    name="task"
                    value={props.task}
                    onChange={props.handleInput}
                />
                <button onClick={props.handleSubmit}>+</button>
            </form>
        </div>
    )
}

export default TodoForm