import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({onClick, retweeted, text}) => (
  <li onClick={onClick} style={{fontWeight: retweeted ? '900' : 'normal'}}>{text}</li>);

Tweet.propTypes = {
  onClick: PropTypes.func.isRequired,
  retweeted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Tweet;