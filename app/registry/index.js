import { GrammarRegistry } from '@pnidem/first-mate';

import sample from './JavaScript.sample.txt';
import jsGrammar from './javascript.json';

const registry = new GrammarRegistry();

const grammar = registry.createGrammar('javascript', jsGrammar);

registry.addGrammar(grammar);

const tokenized = grammar.tokenizeLines(sample);

export default tokenized;
