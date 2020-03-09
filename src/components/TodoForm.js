import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';




class ToDoForm extends React.Component{

    constructor(){
        super()
        this.state = {
            item: ''
        }
        
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.item);
        this.setState({
            item: ''
        })
    }
    
    render() {
        
        return (
            <form onSubmit={this.handleSubmit} >
                <Input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <Button type="submit">Add</Button>
            </form>
        )
    }

}

export default ToDoForm