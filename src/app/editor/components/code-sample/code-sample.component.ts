import {
  Component,
  Input
} from '@angular/core';

import * as tinycolor from 'tinycolor2';

@Component({
  selector: 'cs-code-sample',
  template: require('./code-sample.component.html')
})
export class CodeSampleComponent {
  @Input() tokenized: any;
  @Input() scheme: any;

  getScopes(scopes: string[]): string {
    return scopes.join(' ').replace(/\./g, ' ');
  }

  get styles(): Object {
    const settings: Object = this.scheme.settings[0].settings;

    return {
      'background-color': tinycolor(settings['background']).toRgbString(),
      color: tinycolor(settings['foreground']).toRgbString()
    };
  }

  get gutterStyle(): Object {
    const settings: Object = this.scheme.settings[0].settings;

    return {
      color: tinycolor(settings['gutterForeground']).toRgbString()
    };
  }
}
