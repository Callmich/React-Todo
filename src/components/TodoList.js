// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




import React from 'react';

import Todo from './Todo';


const useStyles = makeStyles({
    button: {
        border: "solid",
    }

})


const ToDoList = props => {
    const classes = useStyles();
    return (
        <div >
            {props.toDo.map(item => (
                <Todo 
                    key={item.id}
                    item={item}
                    toggleToDo={props.toggleToDo}
                />
            ))}
            <Button className={classes.button} onClick={props.clearToDo}>
                Clear Finished Tasks
            </Button>
        </div>
    )
}

export default ToDoList