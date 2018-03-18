import {connect} from 'react-redux';
import {toggleTweet} from './../actions/actions';
import TweetList from '../components/tweet-list/TweetList';

const getVisibleTweets = (tweets, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tweets;
    case 'SHOW_RETWEETED':
      return tweets.filter(tweet => tweet.retweeted);
    case 'SHOW_NOT_RETWEETED':
      return tweets.filter(tweet => !tweet.retweeted);
    case 'SHOW_ACTIVE':
      return tweets.filter(tweet => !tweet.retweeted);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  tweets: getVisibleTweets(state.tweets, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => {
  return {
    onTweetClick: id => {
      dispatch(toggleTweet(id));
    }
  };
};

const VisibleTweetList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);

export default VisibleTweetList;
