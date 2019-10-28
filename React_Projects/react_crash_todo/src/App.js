import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

// This App.css file is acting like a global css file for the project
import './App.css';



class App extends Component {

  state = {
    todos: [

      // uncomment to run the hardcoded data
      // {
      //   id: uuid.v4(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Pick up pizza',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Play the new Call of Duty Modern Warfare',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {

    // Test to see if the data from the API is showing on the console
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => (console.log(response)));

    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => this.setState({ todos: response.data}));

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

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));

    // Test to see if the id of a single todo appears in the console
    // console.log(id);

   // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});

  }

  // Add Todo
  addToDo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(response => this.setState({ todos: [...this.state.todos, response.data] }))

    // uncomment to use the hardcoded data
    // this.setState({ todos: [...this.state.todos, newTodo] });
  }

  // Note:
  // Render is a lifecycle method and it is the only one that is required because it 
  // needed to render the component in the browser and it is going to return JSX.
  // In JSX you have to use the className attribute.

  render() {

    // Test to see if our array of object displays in the console
    // console.log(this.state.todos);

    return (

      <Router>

        <div className="App">

          <div className = "container">

            {/* Header Component */}
            <Header />

            <Route exact path = "/" render = {props => (
              <React.Fragment>

                {/* AddTodo Component */}
                <AddTodo addTodo = {this.addToDo} />

                {/* Like a custom HTML tag */}
                <Todos todos = {this.state.todos} markComplete = {this.markComplete} deleteTodo = {this.deleteTodo} />
                
              </React.Fragment>
            )} />

            <Route path = "/about" component = {About} />

          </div>

        </div>

      </Router>

    );
  }
}

export default App;
