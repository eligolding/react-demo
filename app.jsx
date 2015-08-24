var App = React.createClass({
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
    this.props.onTweet(this.state.msg.substring(0, 140));
    this.setState({msg: ''});
    React.findDOMNode(this.refs.tweetBox).focus();
  },
  handleInput: function(e) {
    this.setState({msg: e.target.value});
  },
  render: function() {
    var style = {
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

var TweetList = React.createClass({
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

var user = {
  name: 'Eli Golding',
  email: 'eligolding@gmail.com',
  avatar: 'http://www.gravatar.com/avatar/ecbcfd9ce849af543b91a23cd8267737'
};

React.render(<App user={user} />, document.body);
