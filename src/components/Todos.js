require('normalize.css');
require('styles/Todos.css');

import React from 'react';

const ENTER_KEY = 13;

/**
 *
 */
class TodosComponent extends React.Component {

  static defaultProps = {
    todos: [],
    value: null
  }

  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos,
      value: props.value
    };
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value });
  }


  handleKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      this.handleAdd();
    }
  }

  handleAdd = () => {
    if (this.state.value) {
      this.state.todos.push(this.state.value);
    }
    this.setState({ value: '' });
  }

  handleRemoveAll = () => {
    this.setState({ todos: [] });
  }

  render() {
    return (
      <div>
        <h3>TODOs:</h3>
        <input type="text" placeholder="Wat?" onChange={this.handleInput} onKeyDown={this.handleKeyDown} value={this.state.value} />
        <button className="btn" type="button" onClick={this.handleAdd}>Add</button>
        <ul>
        {this.state.todos.map(function (todo, i) {
          return <li key={i}>{todo}</li>
        })}
        </ul>
        <button className="btn" type="button" onClick={this.handleRemoveAll}>Remove all</button>
      </div>
    );
  }
}

export default TodosComponent;
