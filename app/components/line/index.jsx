import React from 'react';

import { getTokenizedLine, getContexts } from './helpers.jsx';

import syntax from './JavaScript.sublime-syntax';

const contexts = getContexts(syntax);

export default class Line extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenizedLine: (<span></span>)
    };
  }

  componentDidMount() {
    const { line } = this.props;
    const tokens = line.split(' ');

    getTokenizedLine(tokens, contexts).then((tokenizedLine) => {
      this.setState({
        tokenizedLine
      });
    });
  }

  render() {
    return (
      <span>{this.state.tokenizedLine}</span>
    );
  }
}

Line.propTypes = {
  line: React.PropTypes.string.isRequired
};
