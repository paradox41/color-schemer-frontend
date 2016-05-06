import { combineReducers } from 'redux';

const INITIAL_STATE = {};

function scheme(state = INITIAL_STATE, action) {
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
