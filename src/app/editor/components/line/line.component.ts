import {
  Component,
  Input
} from '@angular/core';
import { NgFor } from '@angular/common';

import './line.component.scss';

interface Line {
  scopes: string[];
  value: string;
}

@Component({
  selector: 'cs-line',
  template: require('./line.component.html'),
  directives: [NgFor]
})
export class LineComponent {
  @Input() line: Line;
  @Input() lineNumber: number;

  getScope(scopes: string[]): string {
    return scopes.join(' ').replace(/\./g, ' ');
  }
}
