import React from 'react';
import { connect } from 'react-redux';
// import 'react-colors-picker/assets/index.css';
// import ColorPicker  from 'react-colors-picker';

import classnames from 'classnames';

import * as actions from './actions';

class Token extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    token: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { token } = this.props;
    const classes = classnames(token.scopes.join(' ').replace(/\./g, ' '));

    return (
      <span
        className={classes}
        onClick={this.onTokenClick}>
        {token.value}
      </span>
    );
  }

  onTokenClick= () => {
    const { token } = this.props;

    if (token.value.trim() === '') {
      return false;
    }
  }

  onColorSelect() {
    const { dispatch, token } = this.props;
    const action = actions.editToken(token);

    dispatch(action);
  }
}

export default connect(state => state)(Token);
