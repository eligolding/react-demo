import React from 'react';

export default function({tweets, onDelete}) {
  return (
    <ul className="list-group">
      {tweets.map(function (tweet) {
        return (
          <li key={tweet.dateTime} className="list-group-item clearfix">
            <div className="pull-left" style={{marginRight: '10px'}}>
              <img src={tweet.avatar} />
            </div>
            <p className="small">{tweet.username} {tweet.dateTime}</p>
            <p className="lead">{tweet.msg}</p>
            <a className="delete pull-right" onClick={onDelete.bind(null, tweet)}>delete</a>
          </li>
        );
      })}
    </ul>
  )
}
