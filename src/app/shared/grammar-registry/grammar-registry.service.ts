/// <reference path="./index.d.ts" />
import { Injectable } from '@angular/core';

import {
  Grammar,
  GrammarRegistry
} from '@pnidem/first-mate';

import {
  Samples,
  Syntaxes,
  Languages
} from './interfaces';

const samples: Samples = {
  javascript: require('./samples/JavaScript.txt')
};

const syntaxes: Syntaxes = {
  javascript: require('language-javascript/grammars/javascript.cson')
};

@Injectable()
export class GrammarRegistryService {
  private _registry: GrammarRegistry;

  getSample(language: Languages): string {
    return samples[language.toLowerCase()];
  }

  getSyntax(language: Languages): Object {
    return syntaxes[language.toLowerCase()];
  }

  createGrammar(language: Languages, syntax: any): Grammar {
    return (<any>this.registry).createGrammar(language, syntax);
  }

  addGrammar(grammar: Grammar): void {
    this.registry.addGrammar(grammar);
  }

  get registry(): GrammarRegistry {
    if (this._registry === undefined) {
      this._registry = new GrammarRegistry();
    }

    return this._registry;
  }
}

export {
  Grammar
}
