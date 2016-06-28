import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Route } from '@ngrx/router';

import tokenized from '../shared/registry';

import {
  LineComponent,
  PaletteComponent
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
    LineComponent,
    PaletteComponent
  ]
})
export class EditorComponent {
  tokenized: any;
  scheme: any;

  constructor() {
    this.tokenized = tokenized;
    this.scheme = scheme;
  }
}

export const route: Route = {
  path: '/editor',
  component: EditorComponent
};
