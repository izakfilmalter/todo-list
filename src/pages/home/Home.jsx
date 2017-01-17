import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import AddTodo from '../../containers/addTodo/AddTodo';
import VisibleTodoList from '../../containers/visibleTodoList/VisibleTodoList';

class Home extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default Home;
