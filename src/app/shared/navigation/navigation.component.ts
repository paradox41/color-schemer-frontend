import {
  Component,
  Input
} from '@angular/core';

export interface NavItem {
  linkTo: string;
  name: string;
}

@Component({
  selector: 'cs-navigation',
  template: require('./navigation.component.html')
})
export class NavigationComponent {
  @Input() items: NavItem[];
}
