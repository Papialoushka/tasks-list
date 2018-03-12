import React from 'react';
import {hydrate} from 'react-dom';
import {createStore} from 'redux';
import tweetsApp from './src/reducers/reducers';
import Root from './src/components/root/Root';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

let store = createStore(tweetsApp, preloadedState);

hydrate(
  <Root store={store}/>,
  document.getElementById('root')
);