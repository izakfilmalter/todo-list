import React, { Component } from 'react';

import AddTodo from '../../containers/addTodo/AddTodo';
import Footer from '../../components/footer/Footer';
import VisibleTodoList from '../../containers/visibleTodoList/VisibleTodoList';

import {
  ApplicationContainer,
  Column,
  Logo,
  SideBar,
} from './styles';

class Application extends Component {
  render() {
    return (
      <ApplicationContainer>
        <SideBar>
          <Logo>Todo<br />List</Logo>
          <AddTodo />
        </SideBar>

        <Column>
          <Footer />
          <VisibleTodoList />
        </Column>
      </ApplicationContainer>
    );
  }
}

export default Application;
