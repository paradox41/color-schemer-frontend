import {
  Injectable
} from '@angular/core';

const plist: any = require('plist');

const themes: { [name: string]: string } = {
  'material-theme-darker': require('material-theme/schemes/Material-Theme-Darker.tmTheme')
};

interface Theme {
  settings: Object[];
}

@Injectable()
export class ThemeService {
  private theme: Theme;

  setTheme(name: string): void {
    if (!name) {
      throw new Error('Theme name required');
    } else if (!(name in themes)) {
      throw new Error(`Unknown theme: ${name}`);
    }

    this.theme = plist.parse(themes[name]);
  }

  getTheme(): Theme {
    return this.theme;
  }

  get generalSettings(): Object {
    return this.theme.settings[0]['settings'];
  }
}
