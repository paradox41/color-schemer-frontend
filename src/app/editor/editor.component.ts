import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Route } from '@ngrx/router';

import tokenized from '../shared/registry';

import { LineComponent } from './components';

import './editor.component.scss';

@Component({
  selector: 'editor',
  template: require('./editor.component.html'),
  directives: [
    NgClass,
    NgFor,
    LineComponent
  ]
})
export class EditorComponent {
  tokenized: any;

  constructor() {
    this.tokenized = tokenized;
  }
}

export const route: Route = {
  path: '/editor',
  component: EditorComponent
};
