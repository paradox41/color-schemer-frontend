import React from 'react';
import _ from 'lodash';

import json from './JavaScript.sublime-syntax';

const flatJson = _(json.contexts).values().flatten().filter((context) => {
  let { match, scope } = context;

  return (!_.isUndefined(match) && !_.isUndefined(scope));
}).value();

export default class Line extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { line } = this.props;
    const tokens = line.split(' ');

    const tokenizedLine = _.map(tokens, (token, idx) => {
      for (let i = flatJson.length - 1; i >= 0; i--) {
        let context = flatJson[i];
        let { match } = context;
        let regex;

        try {
          regex = new RegExp(match);
        } catch (e) {
          regex = null;
        }

        if (regex !== null && regex.test(token)) {
          return (<span key={idx} className={context.scope}>{token} </span>);
        }
      }
    });

    return (
      <span>{tokenizedLine}</span>
    );
  }
}

Line.propTypes = {
  line: React.PropTypes.string.isRequired
};
