import {bootstrap} from 'angular2/platform/browser';

import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: '<h1>My app</h1>'
})
export class AppComponent {}

bootstrap(AppComponent);
