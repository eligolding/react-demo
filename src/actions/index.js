export function addTweet(tweet) {
  return {
    type: 'ADD_TWEET',
    tweet
  }
}

export function removeTweet(tweet) {
  return {
    type: 'REMOVE_TWEET',
    tweet
  }
}
