import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/app';
import Editor from './editor';

import reducer from './reducers';

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, promise, logger));

import 'normalize.css';
import './index.css';

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Editor}></IndexRoute>

        <Route path="editor" component={Editor}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
