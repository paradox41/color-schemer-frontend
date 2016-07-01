import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Route } from '@ngrx/router';
import { Grammar } from '@pnidem/first-mate';

import { RegistryService } from '../shared/registry';

import {
  PaletteComponent,
  CodeSampleComponent
} from './components';

import './editor.component.scss';

const ColorSchemeConverter: any = require('color-scheme-parser');
const firewatch: any = require('firewatch-color-scheme/firewatch.yml');
const scheme: any = new ColorSchemeConverter(firewatch).serialize();

@Component({
  selector: 'cs-editor',
  template: require('./editor.component.html'),
  directives: [
    NgClass,
    NgFor,
    PaletteComponent,
    CodeSampleComponent
  ],
  providers: [RegistryService]
})
export class EditorComponent implements OnInit {
  tokenized: any;
  scheme: any;

  constructor(private registryService: RegistryService) {
    this.scheme = scheme;
    this.registryService = registryService;
  }

  ngOnInit(): void {
    const syntax: any = this.registryService.getSyntax('javascript');
    const grammar: Grammar = this.registryService.createGrammar('javascript', syntax);

    this.registryService.addGrammar(grammar);

    this.tokenized = grammar.tokenizeLines(this.registryService.getSample('javascript'));
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
