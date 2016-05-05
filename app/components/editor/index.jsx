import React from 'react';
import { GrammarRegistry } from '@pnidem/first-mate';

import Line from '../line/index.jsx';

import sample from './JavaScript.sample.txt';
import jsGrammar from './javascript.json';

import './editor.css';

const registry = new GrammarRegistry();

const grammar = registry.createGrammar('javascript', jsGrammar);
registry.addGrammar(grammar);

const tokenized = grammar.tokenizeLines(sample);

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
