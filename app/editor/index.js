import React from 'react';

import Line from './components/line';
import SchemeEditor from './components/scheme-editor';

import tokenized from '../registry';

import './editor.css';

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
      <div className="editor">
        <div className="editor__scheme">
          <SchemeEditor></SchemeEditor>
        </div>
        <div className="editor__code">
          <pre>{code.map(function(line, index) {
            return (
              <div key={index}>
                <span className="gutter line-number">{index + 1}</span>
                <Line line={line} />
              </div>
            );
          })}</pre>
        </div>
      </div>
    );
  }
}
