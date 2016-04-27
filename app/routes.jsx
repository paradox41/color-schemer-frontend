import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/App.jsx';
import Themes from './containers/Themes.jsx';

import Editor from './components/editor/index.jsx';
import Create from './components/create/index.jsx';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Themes}></IndexRoute>

      <Route path="themes" component={Themes}></Route>
      <Route path="themes/create" component={Create}></Route>
      <Route path="editor" component={Editor}></Route>
    </Route>
  </Router>
);
