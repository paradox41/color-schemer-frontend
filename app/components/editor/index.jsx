import React from 'react';
import { GrammarRegistry } from '@pnidem/first-mate';

// import Line from '../line/index.jsx';

import sample from './JavaScript.sample.txt';

import './editor.css';

const registry = new GrammarRegistry();

// const grammar = registry.loadGrammar('./javascript.cson');

// const { line, tags } = grammar.tokenizeLine('var offset = 3;');

// const tokens = registry.decodeTokens(line, tags);

console.log(registry);

export default class Editor extends React.Component {
  constructor() {
    super();

    this.state = {
      code: sample.split('\n')
    };
  }

  render() {
    // var { code } = this.state;

    return (
      <div>
        <pre className="editor"></pre>
      </div>
    );
  }
}
