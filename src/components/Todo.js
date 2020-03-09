import React from 'react';

const ToDo = props => {
    return (
        <div 
            onClick={() => props.toggleToDo(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDo;