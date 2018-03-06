import React from 'react';
import {render, hydrate} from 'react-dom';
import {createStore} from 'redux';
import tasksApp from './src/reducers/reducers';
import Root from './src/components/root/Root';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

let store = createStore(tasksApp, preloadedState);

hydrate(
  <Root store={store}/>,
  document.getElementById('root')
);