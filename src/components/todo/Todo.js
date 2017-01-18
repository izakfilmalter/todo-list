import React, { Component, PropTypes } from 'react';

class Todo extends Component {
  render() {
    const {
      completed,
      onClick,
      text,
    } = this.props;

    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
