import React from 'react';

export default class Line extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { line } = this.props;

    return (
      <span>{line.map(function(token, index) {
        return (<span key={index} className={token.scopes.join(' ')}>{token.value}</span>);
      })}</span>
    );
  }
}

Line.propTypes = {
  line: React.PropTypes.array.isRequired
};
