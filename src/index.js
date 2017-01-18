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

// MaterialUI And Theme Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// InjectTapEvent for MaterialUI
import injectTapEventPlugin from 'react-tap-event-plugin';

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

// Begin periodically persisting the store
const persistor = persistStore(store, {});
crosstabSync(persistor);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Set our MaterialUI Theme
const muiTheme = getMuiTheme({
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
});

render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <Application />
      </Provider>
    </MuiThemeProvider>
  </StyletronProvider>,
  document.getElementById('root')
);
