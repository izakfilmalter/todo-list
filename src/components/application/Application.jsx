import React, { Component } from 'react';

import AddTodo from '../../containers/addTodo/AddTodo';
import Footer from '../../components/footer/Footer';
import VisibleTodoList from '../../containers/visibleTodoList/VisibleTodoList';

import {
  ApplicationContainer,
  Column,
  Logo,
} from './styles';

class Application extends Component {
  render() {
    return (
      <ApplicationContainer>
        <Logo>Todo<br />List</Logo>

        <Column>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Column>
      </ApplicationContainer>
    );
  }
}

export default Application;
