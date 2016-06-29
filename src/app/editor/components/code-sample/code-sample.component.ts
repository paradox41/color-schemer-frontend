import { Component, Input } from '@angular/core';

import { LineComponent } from '../line';

@Component({
  selector: 'cs-code-sample',
  template: require('./code-sample.component.html'),
  directives: [LineComponent]
})
export class CodeSampleComponent {
  @Input() tokenized: any;
}
