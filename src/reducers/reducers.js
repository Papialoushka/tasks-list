import {combineReducers} from 'redux';
import tasks from './tasksReducer';
import visibilityFilter from './filterReducer';

const tasksApp = combineReducers({
  tasks,
  visibilityFilter
});

export default tasksApp;