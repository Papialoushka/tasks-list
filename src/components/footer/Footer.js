import React from 'react';
import FilterLink from './../../containers/FilterLink';
import { VisibilityFilters } from './../../actions/actions';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters._SHOW_NOT_RETWEETED}>
      To retweet
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_RETWEETED}>
      Retweeted
    </FilterLink>
  </p>
);

export default Footer;