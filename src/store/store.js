import {createStore} from 'redux';
import tasksApp from '../reducers/reducers';

let store = createStore(tasksApp);
//let store = createStore(tasksApp, window.STATE_FROM_SERVER);