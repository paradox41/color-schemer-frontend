import React from 'react';
import classnames from 'classnames';

import './token.css';

export default class Token extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    const { token } = this.props;
    // const classes = classnames(token.scopes.join(' '), 'token', {
    //   'token--active': this.state.active
    // });
    const classes = classnames(token.scopes.join(' ').replace(/\./g, ' '));

    return (
      <span
        className={classes}
        onMouseEnter={this.showScope.bind(this, token)}
        onMouseOut={this.hideScope.bind(this)}>
        {token.value}
      </span>
    );
  }

  showScope(token) {
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
}

Token.propTypes = {
  token: React.PropTypes.object.isRequired
};
