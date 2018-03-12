import nanoid from 'nanoid';
export const ADD_TWEET = 'ADD_TWEET';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_RETWEETED: 'SHOW_RETWEETED',
  SHOW_NOT_RETWEETED: 'SHOW_NOT_RETWEETED'
};

export const addTweet = (text) => {
  return {type: ADD_TWEET, id: nanoid(), text};
};

export const toggleTweet = (id) => {
  return {type: TOGGLE_TWEET, id};
};

export const setVisibilityFilter = (filter) => {
  return {type: SET_VISIBILITY_FILTER, filter};
};