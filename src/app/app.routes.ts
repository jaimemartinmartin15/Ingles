import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./menu/menu.routes').then((m) => m.MENU_ROUTES),
  },
  {
    path: 'alfabeto',
    loadChildren: () => import('./alphabet/alphabet.routes').then((m) => m.ALPHABET_ROUTES),
  },
  {
    path: 'tiempos-verbales',
    loadChildren: () => import('./tenses/tenses.routes').then((m) => m.TENSES_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
