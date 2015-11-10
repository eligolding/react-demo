import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import App from './containers/App';
import reducers from './reducers';

let state = {
  user: {
    name: 'Eli Golding',
    email: 'eligolding@gmail.com',
    avatar: 'http://www.gravatar.com/avatar/ecbcfd9ce849af543b91a23cd8267737'
  },
  tweets: []
};

const store = createStore(reducers, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
