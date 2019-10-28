import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

// This App.css file is acting like a global css file for the project
import './App.css';


class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Pick up pizza',
        completed: false
      },
      {
        id: uuid.v4(),
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

  // Delete Todo
  deleteTodo = (id) => {

    // Test to see if the id of a single todo appears in the console
    // console.log(id);

    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});

  }

  // Add Todo
  addToDo = (title) => {

    // Create new variable within the scope of this addToDo method
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    // Test whether a submitted todo shows in the console
    // console.log(title);

    this.setState({ todos: [...this.state.todos, newTodo] });
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

        <div className = "container">

          {/* Header Component */}
          <Header />

          {/* AddTodo Component */}
          <AddTodo addTodo = {this.addToDo} />

          {/* Like a custom HTML tag */}
          <Todos todos = {this.state.todos} markComplete = {this.markComplete} deleteTodo = {this.deleteTodo} />

        </div>

      </div>

    );
  }
}

export default App;
