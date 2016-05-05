import React from 'react';

import Token from '../token/index.jsx';

export default class Line extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { line } = this.props;

    return (
      <span>{line.map(function(token, index) {
        return (<Token key={index} token={token} />);
      })}</span>
    );
  }
}

Line.propTypes = {
  line: React.PropTypes.array.isRequired
};
