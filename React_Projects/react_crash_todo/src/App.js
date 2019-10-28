import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Pick up pizza',
        completed: false
      },
      {
        id: 3,
        title: 'Play the new Call of Duty Modern Warfare',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // Note:
  // Render is a lifecycle method and it is the only one that is required because it 
  // needed to render the component in the browser and it is going to return JSX.
  // In JSX you have to use the className attribute.

  render() {

    // Test to see if our array of object displays in the console
    // console.log(this.state.todos);

    return (

      <div className="App">

        {/* Like a custom HTML tag */}
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} />

      </div>

    );
  }
}

export default App;
