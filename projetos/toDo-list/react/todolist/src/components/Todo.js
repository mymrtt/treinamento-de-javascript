// Libs
import React, { Component } from 'react';

//Styles
import './todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      title: '',
      task: '',
      color: '#dddddd'
    }
  }

  handleChange = (event) => {
    const value = event.target.name

    this.setState({
      [value]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let task = {
      title: this.state.title,
      task: this.state.task,
      color: this.state.color
    }

    this.setState({
      title: '',
      task: '',
      color: '#dddddd',
      todo: [
        ...this.state.todo,
        task
      ]
    });
  }

  handleRemoveTask = (item) => {
    const removeTask = this.state.todo.filter(todo => {
      return todo !== item;
    });

    this.setState({
      todo: [...removeTask]
    })
  }

  renderTasks = () => {
    return this.state.todo.map((item, index) => {
      return (
        <li
          key={index}
          style={{backgroundColor: item.color}}
        > 
          <p>{item.title}</p>
          <p>{item.task}</p>
          <p>{item.color}</p>
          <button
            onClick={(e)=> this.handleRemoveTask(item)}
          >
          Remove
          </button>
        </li>
      )
    });
  }

  render() {
    return (
      <div id="Todo">
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* Title */}
            <input 
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
              className="Todo_input"
            />
          </label>
          <label>
            {/* Task */}
            <input 
              type="text"
              name="task"
              placeholder="Task"
              value={this.state.task}
              onChange={this.handleChange}
              className="Todo_input"
            />
          </label>
          <label>
            Color
            <input 
              type="color"
              name="color"
              placeholder="Color"
              value={this.state.color}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </label>
        </form>
          <ul>
            {this.renderTasks()}
          </ul>
      </div>
    );
  }
}

export default Todo;
