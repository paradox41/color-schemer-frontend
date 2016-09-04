import {
  Component
} from '@angular/core';

import {
  Route
} from '@angular/router';

import {
  NavItem
} from './shared/navigation';

@Component({
  selector: 'cs-app',
  template: require('./app.component.html')
})
export class AppComponent {
  navItems: NavItem[];

  constructor() {
    this.navItems = [{
      linkTo: 'editor',
      name: 'Editor'
    }];
  }
}

export const route: Route = {
  path: '',
  component: AppComponent
};
