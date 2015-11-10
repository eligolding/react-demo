import React from 'react';
import ReactDOM from 'react-dom';

import TwitterBox from './TwitterBox';
import TweetList from './TweetList';

const App = React.createClass({
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
            <TwitterBox user={this.props.user} onTweet={this.props.addTweet} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <TweetList tweets={this.props.tweets} onDelete={this.props.removeTweet}/>
          </div>
        </div>
      </div>
    );
  }
});

export default App;