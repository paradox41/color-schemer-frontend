import * as _ from 'lodash';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NgFor } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import './palette.component.scss';

const keyBy: any = _.memoize(_.keyBy);

interface SettingsByScope {
  [scope: string]: {
    name: string;
    scope: string;
    settings: {
      foreground: string;
      fontStyle: string[];
    };
  };
}

@Component({
  selector: 'cs-palette',
  template: require('./palette.component.html'),
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    NgFor
  ]
})
export class PaletteComponent implements OnInit, OnChanges {
  @Input() scheme: any;

  ngOnInit(): void {
    const sheet: HTMLElement = document.createElement('style');

    sheet.innerHTML = this.stylesheet;
    document.head.appendChild(sheet);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  get settingsByScope(): any {
    return keyBy(_.tail(this.scheme.settings), 'scope');
  }

  get generalSettings(): any {
    return this.scheme.settings[0].settings;
  }

  get generalSettingsKeys(): string[] {
    return _.keys(this.scheme.settings[0].settings).sort();
  }

  get settings(): Object[] {
    return _.tail(this.scheme.settings);
  }

  get stylesheet(): string {
    const settingsByScope: SettingsByScope = this.settingsByScope;

    return _.map(settingsByScope, ({ scope, settings }) => {
      let fontStyle: string = '';

      if (settings.fontStyle) {
        const boldIndex: number = settings.fontStyle.indexOf('bold');
        const italicIndex: number = settings.fontStyle.indexOf('italic');

        if (boldIndex > -1) {
          fontStyle.concat(`font-weight: ${settings.fontStyle[boldIndex]};`);
        }

        if (italicIndex > -1) {
          fontStyle.concat(`font-style: ${settings.fontStyle[italicIndex]};`);
        }
      }

      return `.${scope} { color: ${settings.foreground}; ${fontStyle} }`;
    }).join('\n');
  }
}
