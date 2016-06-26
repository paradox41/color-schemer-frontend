/// <reference path="./index.d.ts" />

import { GrammarRegistry } from '@pnidem/first-mate';

const sample: string = require('./JavaScript.sample.txt');
const jsGrammar: any = require('./javascript.json');

const registry: any = new GrammarRegistry();

const grammar: any = registry.createGrammar('javascript', jsGrammar);

registry.addGrammar(grammar);

const tokenized: any = grammar.tokenizeLines(sample);

export default tokenized;
