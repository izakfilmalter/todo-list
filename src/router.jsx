import React from 'react';

// Import react-router stuff.
import {
  browserHistory,
  Route,
  Router,
} from 'react-router';

// Import Application which is the main wrapper for the app, and includes any global components like navigation.
import Application from './components/application/Application';

// Import the different pages for the application.
import Home from './pages/home/Home';

// This is a helper function for Router that lets us pass the routed pages through Application and allows us to have a
// page on /. The reason we are doing this here instead of the root index.js is because we need to pass the react-router
// props into Application for navigation purposes.
function createElement(Component, Props) {
  return (
    <Application Component={Component} {...Props} />
  );
}

export default (
  <Router history={browserHistory} createElement={createElement}>
    <Route path="/" component={Home} />
  </Router>
);
