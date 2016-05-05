import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/App.jsx';

import Editor from './editor/index.jsx';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Editor}></IndexRoute>

      <Route path="editor" component={Editor}></Route>
    </Route>
  </Router>
);
