import {combineReducers} from 'redux';
import tweets from './tweetsReducer';
import visibilityFilter from './filterReducer';

const tweetsApp = combineReducers({
  tweets,
  visibilityFilter
});

export default tweetsApp;