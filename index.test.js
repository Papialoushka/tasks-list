import * as actions from './src/actions/actions';

describe('actions', () => {
  it('should create an action to add a tweet', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: actions.ADD_TWEET,
      text
    };
    expect(actions.addTweet(text)).toEqual(expectedAction);
  })
});