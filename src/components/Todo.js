import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';



const ToDo = props => {
    return (
        <div>
            <Card className="cardSize">
            <Typography
            onClick={() => props.toggleToDo(props.item.id)}
            className={`item${props.item.completed ? 'completed' : ''}`}
        >
            <p>{props.item.task}</p>
            </Typography>
            </Card>
        </div>
    )
}

export default ToDo;