import React from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames';

import * as actions from './actions';

import './token.css';

class Token extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    const { token } = this.props;
    const classes = classnames(token.scopes.join(' ').replace(/\./g, ' '), 'token', {
      'token--active': this.state.active
    });

    return (
      <span
        className={classes}
        onMouseEnter={this.showScope.bind(this)}
        onMouseOut={this.hideScope.bind(this)}
        onClick={this.onTokenClick.bind(this)}>
        {token.value}
      </span>
    );
  }

  showScope() {
    const { token } = this.props;

    if (token.value.trim() === '') {
      return false;
    }

    this.setState({
      active: true
    });
  }

  hideScope() {
    this.setState({
      active: false
    });
  }

  onTokenClick() {
    const { dispatch, token } = this.props;
    const action = actions.editToken(token);

    dispatch(action);
  }
}

Token.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  token: React.PropTypes.object.isRequired
};

export default connect(state => state)(Token);
