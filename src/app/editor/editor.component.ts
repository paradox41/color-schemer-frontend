import {
  Component,
  OnInit
} from '@angular/core';

import {
  ThemeService
} from '../shared/theme';

import {
  Grammar,
  GrammarRegistryService,
} from '../shared/grammar-registry';

import './editor.component.scss';

@Component({
  selector: 'cs-editor',
  template: require('./editor.component.html'),
  providers: [
    GrammarRegistryService,
    ThemeService
  ]
})
export class EditorComponent implements OnInit {
  tokenized: any;
  theme: any;

  constructor(
    private registryService: GrammarRegistryService,
    private themeService: ThemeService
  ) {
    this.registryService = registryService;
    this.themeService = themeService;
  }

  ngOnInit(): void {
    const syntax: any = this.registryService.getSyntax('javascript');
    const grammar: Grammar = this.registryService.createGrammar('javascript', syntax);

    this.registryService.addGrammar(grammar);

    this.tokenized = grammar.tokenizeLines(this.registryService.getSample('javascript'));

    this.themeService.setTheme('material-theme-darker');

    this.theme = this.themeService.getTheme();
  }
}
