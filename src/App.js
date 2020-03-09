import React from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm'

const toDo = [
  {
    task: "Work out",
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
    toDo: toDo,
    task: ""
    };
  }

  toggleToDo = clickedItemId => {
    this.setState({
      toDo: this.state.toDo.map(item => {
        if (item.id === clickedItemId){
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
    console.log("after click",toDo)
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      toDo: [...this.state.toDo, newTask]
    });
    console.log(toDo)
  }
  


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm 
          addTask={this.addTask}
        />
        <ToDoList 
          toDo={this.state.toDo}
          toggleToDo={this.toggleToDo}
        />
      </div>
    );
  }
}

export default App;
