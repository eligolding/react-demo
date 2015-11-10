import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

var user = {
  name: 'Eli Golding',
  email: 'eligolding@gmail.com',
  avatar: 'http://www.gravatar.com/avatar/ecbcfd9ce849af543b91a23cd8267737'
};

ReactDOM.render(<App user={user} />, document.getElementById('content'));
