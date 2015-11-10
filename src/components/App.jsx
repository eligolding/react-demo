import React from 'react';
import ReactDOM from 'react-dom';

import TwitterBox from './TwitterBox';
import TweetList from './TweetList';

const App = React.createClass({
  addTweet: function(msg) {
    var tweet = {
      username: this.props.user.name,
      email: this.props.user.email,
      avatar: this.props.user.avatar,
      dateTime: (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString(),
      msg: msg.substring(0, 140)
    };
    this.setState({tweets: this.state.tweets.reverse().concat(tweet).reverse()});
  },
  deleteTweet: function(deletedTweet) {
    var tweets = this.state.tweets.filter(function(tweet) {
      return tweet.msg !== deletedTweet.msg && tweet.dateTime !== deletedTweet.dateTime;
    });
    this.setState({tweets: tweets});
  },
  getInitialState: function() {
    return {
      tweets: []
    }
  },
  render: function() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Tweeter</h1>
        </div>
        <div className="row">
          <div className="col-md-3 panel panel-default">
            <div className="clearfix" style={{padding: '10px 0'}}>
              <div className="pull-left" style={{marginRight: '7px'}}><img src={this.props.user.avatar} /></div>
              <div>{this.props.user.name}</div>
            </div>
          </div>
          <div className="col-md-6 well">
            <TwitterBox user={this.props.user} onTweet={this.addTweet} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <TweetList tweets={this.state.tweets} onDelete={this.deleteTweet}/>
          </div>
        </div>
      </div>
    );
  }
});

export default App;