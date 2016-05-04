import React from 'react';

export default class Line extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenizedLine: (<span></span>)
    };
  }

  componentDidMount() {
    // const { line } = this.props;
    // const tokens = line.split(' ');
  }

  render() {
    return (
      <span></span>
    );
  }
}

Line.propTypes = {
  line: React.PropTypes.string.isRequired
};
