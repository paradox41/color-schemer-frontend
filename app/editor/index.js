import React from 'react';

import Line from './components/line';

import tokenized from '../registry';

import './editor.css';
import 'atom-material-syntax/index.less';

export default class Editor extends React.Component {
  constructor() {
    super();

    this.state = {
      code: tokenized
    };
  }

  render() {
    const { code } = this.state;

    return (
      <atom-text-editor>
        <code>{code.map(function(line, index) {
          return (
            <div key={index}>
              <span className="gutter line-number">{index + 1}</span>
              <Line line={line} />
            </div>
          );
        })}</code>
      </atom-text-editor>
    );
  }
}
