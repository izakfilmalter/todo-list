import React, { Component } from 'react';

import AddTodo from '../../containers/addTodo/AddTodo';
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

        <VisibleTodoList />
      </ApplicationContainer>
    );
  }
}

export default Application;
