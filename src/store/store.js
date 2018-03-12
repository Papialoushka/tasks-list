import {createStore} from 'redux';
import tweetsApp from '../reducers/reducers';

let store = createStore(tweetsApp);
//let store = createStore(tweetsApp, window.STATE_FROM_SERVER);