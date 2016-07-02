import { Component, OnInit } from '@angular/core';
import {
  NgClass,
  NgFor,
  NgStyle
} from '@angular/common';
import { Route } from '@ngrx/router';
import { Grammar } from '@pnidem/first-mate';

import { RegistryService } from '../shared/registry';

import {
  PaletteComponent,
  CodeSampleComponent
} from './components';

import './editor.component.scss';

const theme: string = require('material-theme/schemes/Material-Theme-Darker.tmTheme');
const plist: any = require('plist');

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
  providers: [RegistryService]
})
export class EditorComponent implements OnInit {
  tokenized: any;
  scheme: any;

  constructor(private registryService: RegistryService) {
    this.registryService = registryService;
  }

  ngOnInit(): void {
    const syntax: any = this.registryService.getSyntax('javascript');
    const grammar: Grammar = this.registryService.createGrammar('javascript', syntax);

    this.registryService.addGrammar(grammar);

    this.tokenized = grammar.tokenizeLines(this.registryService.getSample('javascript'));

    this.scheme = plist.parse(theme);
  }
}

export const route: Route = {
  path: '/editor',
  loadComponent: (): any => new Promise(resolve => {
    (<any>require).ensure([], require => {
      resolve(EditorComponent);
    });
  })
};
