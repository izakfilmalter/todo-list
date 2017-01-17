import React, { Component, PropTypes } from 'react';

import {
  ApplicationContainer
} from './styles';

class Application extends Component {
  static propTypes = {
    Component: PropTypes.func,
  };

  render() {
    const {
      Component,
    } = this.props;

    return (
      <ApplicationContainer>
        <Component />
      </ApplicationContainer>
    );
  }
}

export default Application;
