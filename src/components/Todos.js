import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {

   
    render () {
  
    return this.props.todos.map((todo) => (
        < TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/> /* pass in object to TodoItem component */
    ))
  }
} 

// Proptypes validation for properties that a component should have.  Set type & set if should be required or not

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}


export default Todos;
