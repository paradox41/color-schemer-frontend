import { Routes } from '@ngrx/router';

import { route as appRoute } from './app';
import { route as editorRoute } from './app/editor';

export const routes: Routes = [
  appRoute,
  editorRoute
];
