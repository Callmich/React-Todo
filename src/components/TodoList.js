// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import React from 'react';

import Todo from './Todo';

const ToDoList = props => {
    return (
        <div>
            {props.toDo.map(item => (
                <Todo 
                    key={item.id}
                    item={item}
                    toggleToDo={props.toggleToDo}
                />
            ))}
            <Button onClick={props.clearToDo}>
                Clear Finished Tasks
            </Button>
        </div>
    )
}

export default ToDoList