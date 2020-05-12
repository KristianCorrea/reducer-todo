import React from 'react'

const Todo =props=>{
    console.log(props)
    const toggler=()=>{
        return{
            textDecoration: props.task.completed ? 'line-through' : 'none',
            color: props.task.completed ? 'green' : 'black'
        }
    }
    const onClickHandler=()=>{
        props.toggleTask(props.task.id)
    }
    return(
        <div>
            <h3
                style={toggler()}
                onClick={onClickHandler}
            >
                {props.task.item}
            </h3>
        </div>
    )
}

export default Todo