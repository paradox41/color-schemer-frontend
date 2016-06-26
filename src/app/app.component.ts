import { Component } from '@angular/core';
import { Route } from '@ngrx/router';

import { NavigationComponent, NavItem } from './shared';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [NavigationComponent]
})
export class AppComponent {
  navItems: NavItem[];

  constructor() {
    this.navItems = [{
      linkTo: '/editor',
      name: 'Editor'
    }, {
      linkTo: '/gallery',
      name: 'Gallery'
    }];
  }
}

export const route: Route = {
  path: '/',
  component: AppComponent
};
