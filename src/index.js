// Core React Imports
import React from 'react';
import { render } from 'react-dom'

// Router Imports
import Router from './router';

// Redux
import { Provider } from 'react-redux'
import {createStore} from 'redux';

// Local Storage
import {persistStore, autoRehydrate} from 'redux-persist'

// Reducers
import todoApp from './reducers'

// Styletron Imports
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Global CSS Imports
import './styles/index.css';

// Locate the Styletron style tag
const styleElements = document.getElementsByClassName('_styletron_hydrate_');

// Create the store
const store = createStore(todoApp, undefined, autoRehydrate());
persistStore(store);

render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    <Provider store={store}>
      {Router}
    </Provider>
  </StyletronProvider>,
  document.getElementById('root')
);
