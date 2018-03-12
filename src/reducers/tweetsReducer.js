import {ADD_TWEET, TOGGLE_TWEET} from './../actions/actions';

const tweets = function (state = [], action) {
  switch (action.type) {
    case ADD_TWEET:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          retweeted: false
        }
      ];
    case TOGGLE_TWEET:
      return state.map((tweet) => {
        if (tweet.id === action.id) {
          return Object.assign({}, tweet, {
            retweeted: !tweet.retweeted
          });
        }
        return tweet;
      });
    default:
      return state;
  }
};

export default tweets;