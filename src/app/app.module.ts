import {
  BrowserModule
} from '@angular/platform-browser';

import {
  NgModule,
  enableProdMode
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';

import {
  routing,
  appRoutingProviders
} from './routes';

import {
  EditorModule
} from './editor';

import {
  SharedModule
} from './shared';

import {
  AppComponent
} from './app.component';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgbModule,
    EditorModule,
    SharedModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
