import React, { Component } from 'react';

import AddTodo from '../../containers/addTodo/AddTodo';
import Footer from '../../components/footer/Footer';
import VisibleTodoList from '../../containers/visibleTodoList/VisibleTodoList';

import {
  ApplicationContainer
} from './styles';

class Application extends Component {
  render() {
    return (
      <ApplicationContainer>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </ApplicationContainer>
    );
  }
}

export default Application;
