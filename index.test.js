import * as actions from './src/actions/actions';

describe('actions', () => {
  it('should create an action to add a task', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: actions.ADD_TASK,
      text
    };
    expect(actions.addTask(text)).toEqual(expectedAction);
  })
});