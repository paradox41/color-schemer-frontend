import * as _ from 'lodash';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { NgFor } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { NGB_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

import './palette.component.scss';

// interface SettingsByScope {
//   [scope: string]: {
//     name: string;
//     scope: string;
//     settings: {
//       foreground: string;
//       fontStyle: string[];
//     };
//   };
// }

@Component({
  selector: 'cs-palette',
  template: require('./palette.component.html'),
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    NgFor,
    NGB_DIRECTIVES
  ]
})
export class PaletteComponent implements OnInit {
  @Input() theme: any;

  ngOnInit(): void {
    const sheet: HTMLElement = document.createElement('style');

    sheet.innerHTML = this.stylesheet;
    document.head.appendChild(sheet);
  }

  get generalSettings(): any {
    return _.head(this.theme.settings)['settings'];
  }

  get generalSettingsKeys(): string[] {
    return _.keys(this.generalSettings).sort();
  }

  get settings(): Object[] {
    return _.tail(this.theme.settings);
  }

  get stylesheet(): string {
    return _.map(this.settings, this._generateRuleFromSetting).join('\n');
  }

  _generateRuleFromSetting(setting: Object): string {
    let fontStyle: string = '';
    let { settings, scope }: any = setting;

    if (settings.fontStyle) {
      let boldIndex: number = settings.fontStyle.indexOf('bold');
      let italicIndex: number = settings.fontStyle.indexOf('italic');

      if (boldIndex > -1) {
        fontStyle.concat(`font-weight: ${settings.fontStyle[boldIndex]};`);
      }

      if (italicIndex > -1) {
        fontStyle.concat(`font-style: ${settings.fontStyle[italicIndex]};`);
      }
    }

    return `.${scope} { color: ${settings.foreground}; ${fontStyle} }`;
  }
}
