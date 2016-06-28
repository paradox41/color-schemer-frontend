import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

export interface NavItem {
  linkTo: string;
  name: string;
}

@Component({
  selector: 'navigation',
  template: require('./navigation.component.html'),
  directives: [NgFor]
})
export class NavigationComponent {
  @Input() items: NavItem[];
}
