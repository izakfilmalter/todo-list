import React, { Component, PropTypes } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    const {
      addTodo,
    } = this.props;

    this.onSubmit = (event) => {
      const inputValue = this.input.value;
      event.preventDefault();


      if (!inputValue.trim()) {
        return;
      }

      addTodo(inputValue);

      this.input.value = '';
    }
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={(node) => this.input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
