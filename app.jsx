var App = React.createClass({
  addTweet: function(tweet) {
    this.setState({tweets: this.state.tweets.reverse().concat(tweet).reverse()});
  },
  deleteTweet: function(dateTime) {
    var tweets = this.state.tweets.filter(function(tweet) {
      return tweet.dateTime !== dateTime;
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
            <div className="clearfix">
              <div className="pull-left"><img src={this.props.user.avatar} /></div>
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

var TwitterBox = React.createClass({
  getInitialState: function() {
    return {
      msg: ''
    };
  },
  handleTweet: function () {
    var tweet = {
      username: this.props.user.name,
      email: this.props.user.email,
      avatar: this.props.user.avatar,
      dateTime: (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString(),
      msg: this.state.msg.substring(0, 140)
    };
    this.props.onTweet(tweet);
    this.setState({msg: ''});
  },
  handleChange: function(e) {
    this.setState({msg: e.target.value});
  },
  render: function() {
    var style = {
      color: this.state.msg.length > 140 ? 'red' : 'black'
    };
    return (
      <fieldset disabled={!!this.props.user.length}>
        <textarea onChange={this.handleChange} id="tweet-box" className="form-control" value={this.state.msg}></textarea>
        <br/>
        <span id="remaining-chars" style={style}>{140 - this.state.msg.length}</span>
        <button onClick={this.handleTweet} id="tweet-btn" className="btn btn-primary pull-right" disabled={!this.state.msg > 0}>
          Tweet
        </button>
      </fieldset>
    );
  }
});

var Tweet = React.createClass({
  handleDelete: function () {
    this.props.onDelete(this.props.dateTime);
  },
  render: function() {
    return (
      <li className="list-group-item clearfix">
        <div className="pull-left" style={{marginRight: '10px'}}>
          <img src={this.props.avatar} />
        </div>
        <p className="small">{this.props.username} {this.props.dateTime}</p>
        <p className="lead">{this.props.msg}</p>
        <a className="delete pull-right" onClick={this.handleDelete}>delete</a>
      </li>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    var tweets = this.props.tweets.map(function (tweet) {
      return <Tweet
        username={tweet.username}
        dateTime={tweet.dateTime}
        avatar={tweet.avatar}
        msg={tweet.msg}
        onDelete={this.props.onDelete}
        />;
    }.bind(this));

    return (
      <ul className="list-group">
        {tweets}
      </ul>
    )
  }
});

var user = {
  name: 'Eli Golding',
  email: 'eligolding@gmail.com',
  avatar: 'http://www.gravatar.com/avatar/ecbcfd9ce849af543b91a23cd8267737'
};

React.render(<App user={user} />, document.body);
