// Core React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Router Imports
import Router from './router';

// Styletron Imports
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Global CSS Imports
import './styles/index.css';

// Locate the Styletron style tag
const styleElements = document.getElementsByClassName('_styletron_hydrate_');

ReactDOM.render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    {Router}
  </StyletronProvider>,
  document.getElementById('root')
);
