import { combineReducers } from 'redux';
import ColorSchemeConverter from 'color-scheme-parser';

import firewatch from 'firewatch-color-scheme/firewatch.yml';

const INITIAL_SCHEME = new ColorSchemeConverter(firewatch).toJSON();

function scheme(state = INITIAL_SCHEME, action) {
  switch (action.type) {
    case 'TOKEN_CLICKED':
      return action.payload;
  }

  return state;
}

function language(state = 'JavaScript', action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return action.payload.language;
  }

  return state;
}

export default combineReducers({
  scheme,
  language
});
