// Core React Imports
import React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

// Local Storage
import { persistStore, autoRehydrate } from 'redux-persist';
import crosstabSync from 'redux-persist-crosstab';

// Reducers
import todoApp from './reducers';

// Import application
import Application from './components/application/Application';

// Styletron Imports
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Global CSS Imports
import './styles/index.css';

// Locate the Styletron style tag
const styleElements = document.getElementsByClassName('_styletron_hydrate_');

// Create the store
const store = createStore(
  todoApp,
  undefined,
  compose(
    autoRehydrate()
  ),
);

// begin periodically persisting the store
const persistor = persistStore(store, {});
crosstabSync(persistor);

render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    <Provider store={store}>
      <Application />
    </Provider>
  </StyletronProvider>,
  document.getElementById('root')
);
