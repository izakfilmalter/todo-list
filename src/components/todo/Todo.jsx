import React, { Component, PropTypes } from 'react';

import Checkbox from 'material-ui/Checkbox';

import {
  checkboxStyles,
  getLabelStyles,
} from './styles';

class Todo extends Component {
  render() {
    const {
      completed,
      onClick,
      text,
    } = this.props;

    return (
      <Checkbox
        checked={completed}
        label={text}
        onCheck={onClick}
        style={checkboxStyles}
        labelStyle={getLabelStyles(completed)}
      />
    );
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
