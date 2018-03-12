import React from 'react';
import {connect} from 'react-redux';
import {addTweet} from './../actions/actions';

let AddTweet = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTweet(input.value));
          input.value = '';
        }}
      >
        <textarea
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Add Tweet
        </button>
      </form>
    </div>
  );
};

AddTweet = connect()(AddTweet);

export default AddTweet;