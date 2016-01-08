import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';

import configureStore from './store';

injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('app')
);
