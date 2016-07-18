import { Component, OnInit } from '@angular/core';
import {
  NgClass,
  NgFor,
  NgStyle
} from '@angular/common';
import { Route } from '@ngrx/router';

import {
  Grammar,
  GrammarRegistryService,
  ThemeService
} from '../shared';

import {
  PaletteComponent,
  CodeSampleComponent
} from './components';

import './editor.component.scss';

@Component({
  selector: 'cs-editor',
  template: require('./editor.component.html'),
  directives: [
    NgClass,
    NgFor,
    NgStyle,
    PaletteComponent,
    CodeSampleComponent
  ],
  providers: [
    GrammarRegistryService,
    ThemeService
  ]
})
export class EditorComponent implements OnInit {
  tokenized: any;
  theme: any;

  constructor(
    private registryService: GrammarRegistryService,
    private themeService: ThemeService
  ) {
    this.registryService = registryService;
    this.themeService = themeService;
  }

  ngOnInit(): void {
    const syntax: any = this.registryService.getSyntax('javascript');
    const grammar: Grammar = this.registryService.createGrammar('javascript', syntax);

    this.registryService.addGrammar(grammar);

    this.tokenized = grammar.tokenizeLines(this.registryService.getSample('javascript'));

    this.themeService.setTheme('material-theme-darker');

    this.theme = this.themeService.getTheme();
  }
}

export const route: Route = {
  path: '/editor',
  loadComponent: (): any => new Promise(resolve => {
    (<any>require).ensure([], () => {
      resolve(EditorComponent);
    });
  })
};
