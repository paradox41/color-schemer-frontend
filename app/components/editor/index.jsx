import React from 'react';
import CodeMirror from 'react-codemirror';

// languages for codemirror
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

export default class Editor extends React.Component {
  constructor() {
    super();

    this.state = {
      code: '// Working'
    };

    this.options = {
      lineNumbers: true,
      mode: 'javascript',
      readOnly: false,
      theme: 'material'
    };

    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

  render() {
    return (
      <div>
        <CodeMirror
          ref="editor"
          value={this.state.code}
          onChange={this.updateCode}
          options={this.options}
          autoSave={true}>
        </CodeMirror>
      </div>
    );
  }
}
