import React, { Component, PropTypes } from 'react';

import Todo from '../todo/Todo';

import {
  TodoListContainer,
} from './styles';

class TodoList extends Component {
  render() {
    const {
      onTodoClick,
      todos,
    } = this.props;

    return (
      <TodoListContainer>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </TodoListContainer>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default TodoList;
