import {
  BrowserModule
} from '@angular/platform-browser';

import {
  NgModule,
  enableProdMode
} from '@angular/core';

import {
  RouterModule
} from '@angular/router';

import {
  FormsModule
} from '@angular/forms';

import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';

import {
  routes,
  appRoutingProviders
} from './routes';

import {
  AppComponent
} from './app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
