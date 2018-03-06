import nanoid from 'nanoid';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTask = (text) => {
  return {type: ADD_TASK, id: nanoid(), text};
};

export const toggleTask = (id) => {
  return {type: TOGGLE_TASK, id};
};

export const setVisibilityFilter = (filter) => {
  return {type: SET_VISIBILITY_FILTER, filter};
};

export const requestTasks = (subreddit) => {
  return {
    type: REQUEST_TASKS,
    subreddit
  }
};

export const selectSubreddit = (subreddit) => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
};

export const invalidateSubreddit = (subreddit) => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
};

export const receiveTasks = (subreddit, json) => {
  return {
    type: RECEIVE_TASKS,
    subreddit,
    tasks: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
};