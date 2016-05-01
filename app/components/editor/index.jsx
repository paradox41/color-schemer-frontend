import React from 'react';

import Line from '../line/index.jsx';

import sample from './JavaScript.sample.txt';

import './editor.css';

export default class Editor extends React.Component {
  constructor() {
    super();

    this.state = {
      code: sample.split('\n')
    };
  }

  render() {
    var { code } = this.state;

    return (
      <div>
        <pre className="editor">{code.map(function(line, index) {
          return (
            <div key={index}>
              <span className="gutter line-number">{index + 1}</span>
              <Line line={line} />
            </div>
          );
        })}</pre>
      </div>
    );
  }
}
