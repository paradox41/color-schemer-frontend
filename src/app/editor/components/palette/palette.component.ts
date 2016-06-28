import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'cs-palette',
  template: require('./palette.component.html'),
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    NgFor
   ]
})
export class PaletteComponent {
  @Input() scheme: any;

  constructor() {
    console.log(this);
  }
}
