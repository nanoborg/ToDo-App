import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component { // rfc - shortcut to make class
    
    // getStyle = () => {
    //     if (this.props.todo.completed) {
    //         return {
    //             textDecoration: 'line-through'
    //         }
    //     } else {
    //         return {
    //             textDecoration: 'none'
    //         }

    //     }
    // }

    getStyle = () => { 
        return {
            
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through' : 'none'
        }
    }

    // markComplete(e) { // e for event parameter
    //     console.log(this.props)
    // } // Custom method that we have created for component

    // markComplete = (e) => {
    //     console.log(this.props)
    // } // No point to have this function is this component
    
    render() {

        const { id, title } = this.props.todo
        
        return (
            // <div style={{backgroundColor: '#f4f4f4'}}>   
            // <div style={itemStyle}>
            <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange={this.markComplete.bind(this)}/> // Need .bind(this) for the custom method */}

                    {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>  // Destructure instead!! */}

                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }

                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >x</button>
                    
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem