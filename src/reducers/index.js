export default function(state = {}, action = {}) {
  switch (action.type) {
    case 'ADD_TWEET':
      return addTweet(state, action.tweet);
    case 'REMOVE_TWEET':
      return removeTweet(state, action.tweet);
    default:
      return state;
  }
}

function addTweet(state, msg) {
  let tweet = {
    username: state.user.name,
    email: state.user.email,
    avatar: state.avatar,
    dateTime: (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString(),
    msg: msg.substring(0, 140)
  };

  return  {
    ...state,
    tweets: [tweet, ...state.tweets]
  };
}

function removeTweet(state, deletedTweet) {
  var tweets = state.tweets.filter(function(tweet) {
    return tweet.msg !== deletedTweet.msg && tweet.dateTime !== deletedTweet.dateTime;
  });

  return  {
    ...state,
    tweets
  };
}
