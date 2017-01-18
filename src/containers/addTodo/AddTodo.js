import { connect } from 'react-redux';

import { addTodo } from '../../actions';

import AddTodo from '../../components/addTodo/AddTodo';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => {
      dispatch(addTodo(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
