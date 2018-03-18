import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../tweet/Tweet';

const TweetList = ({tweets, onTweetClick}) => (
  <ul>
    {tweets.map((tweet) => (
      <Tweet key={tweet.id} {...tweet} onClick={() => onTweetClick(tweet.id)}/>
    ))}
  </ul>
);

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      retweeted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTweetClick: PropTypes.func.isRequired
};

export default TweetList;
