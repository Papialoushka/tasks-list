import React from 'react';
import {connect} from 'react-redux';
import {addTweet} from './../actions/actions';

class AddTweet extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    this.props.dispatch(addTweet(this.input.value));
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
        >
          <textarea
            ref={node => {
              this.input = node;
            }}
          />
        <input type="submit" value="Add Tweet" />
        </form>
      </div>
    );
  }
}

AddTweet = connect()(AddTweet);

export default AddTweet;
