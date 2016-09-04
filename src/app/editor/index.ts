import {
  BrowserModule
} from '@angular/platform-browser';

import {
  NgModule
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  Route
} from '@angular/router';

import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';

import {
  PaletteComponent,
  CodeSampleComponent
} from './components';

import {
  EditorComponent
} from './editor.component';

@NgModule({
  declarations: [
    PaletteComponent,
    CodeSampleComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ]
})
export class EditorModule { }

export const route: Route = {
  path: 'editor',
  component: EditorComponent
};
