import {
  NgModule
} from '@angular/core';

import {
  NavigationModule
} from './navigation';

@NgModule({
  exports: [NavigationModule]
})
export class SharedModule { }
