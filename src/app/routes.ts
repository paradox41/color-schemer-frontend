import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  route as appRoute
} from './';

import {
  route as editorRoute
} from './editor';

export const routes: Routes = [
  appRoute,
  editorRoute
];

export const appRoutingProviders: any[] = [];

export const routing: any = RouterModule.forRoot(routes);
