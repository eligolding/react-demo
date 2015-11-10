import React from 'react';
import ReactDOM from 'react-dom';

const TwitterBox = React.createClass({
  getInitialState: function() {
    return {
      msg: ''
    };
  },
  handleTweet: function () {
    this.props.onTweet(this.state.msg.substring(0, 140));
    this.setState({msg: ''});
    ReactDOM.findDOMNode(this.refs.tweetBox).focus();
  },
  handleInput: function(e) {
    this.setState({msg: e.target.value});
  },
  render: function() {
    let style = {
      color: this.state.msg.length > 140 ? 'red' : 'black'
    };
    return (
      <fieldset disabled={!!this.props.user.length}>
        <textarea onChange={this.handleInput} ref="tweetBox" className="form-control" value={this.state.msg}></textarea>
        <br/>
        <span style={style}>{140 - this.state.msg.length}</span>
        <button onClick={this.handleTweet} className="btn btn-primary pull-right" disabled={!this.state.msg > 0}>
          Tweet
        </button>
      </fieldset>
    );
  }
});

export default TwitterBox;