import React from 'react';

const TweetList = React.createClass({
  render: function () {
    return (
      <ul className="list-group">
        {this.props.tweets.map(function (tweet) {
          return (
            <li key={tweet.dateTime} className="list-group-item clearfix">
              <div className="pull-left" style={{marginRight: '10px'}}>
                <img src={tweet.avatar} />
              </div>
              <p className="small">{tweet.username} {tweet.dateTime}</p>
              <p className="lead">{tweet.msg}</p>
              <a className="delete pull-right" onClick={this.props.onDelete.bind(null, tweet)}>delete</a>
            </li>
          );
        }.bind(this))}
      </ul>
    )
  }
});

export default TweetList;