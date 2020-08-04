import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'
import About from './components/pages/About'
import { v4 as uuidv4 } from 'uuid';


import './App.css';
import axios from 'axios'

class App extends Component {
  
  state = {
    todos: [
      // array for test purposes
      // {
      //   id: uuidv4(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Dinner with wife',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Meeting with boss',
      //   completed: false
      // },
    ]
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
      console.log(res.data)
      this.setState({ todos: res.data })
    })
  }

  // Toggle Complete.
  markComplete = (id) => {
    // console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // delete todo
  delTodo = (id) => {
    // console.log(id)

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }))

    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // })
  }

  // Add Todo
  addTodo = (title) => {
    // console.log(title)
    // const newTodo = {
    //   id: uuidv4(),
    //   title: title,
    //   completed: false

    // }

    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      title: title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data]}))

    // this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render () {
    
    return (

      <Router>
        <div className="App">
         <div className="container">
           < Header />
           <Route exact path="/" render={ props => (
             <React.Fragment>
               < AddTodos addTodo={this.addTodo}/>
               <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>  {/* pass in object & function to todo component */}
             </React.Fragment>
           )}/>
           <Route path="/about" component={About}/>
         </div>
        </div>
      </Router>
      
    );
  }
}



export default App;
