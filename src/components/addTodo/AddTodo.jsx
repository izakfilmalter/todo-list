import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

import {
  textFieldStyles,
} from './styles';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    const {
      addTodo,
    } = this.props;

    this.onSubmit = (event) => {
      const inputValue = this.input.input.value;
      event.preventDefault();


      if (!inputValue.trim()) {
        return;
      }

      addTodo(inputValue);

      this.input.input.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          style={textFieldStyles}
          floatingLabelText="Type a todo"
          ref={(node) => this.input = node}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
