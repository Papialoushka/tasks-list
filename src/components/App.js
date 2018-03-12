import React from 'react';
import Footer from './footer/Footer';
import AddTweet from '../containers/AddTweet';
import VisibleTweetList from '../containers/VisibleTweetList';

const App = () => (
  <div>
    <AddTweet />
    <VisibleTweetList />
    <Footer />
  </div>
);

export default App;