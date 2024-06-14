import { Routes } from '@angular/router';
import { AlphabetComponent } from './alphabet.component';

export const ALPHABET_ROUTES: Routes = [
  {
    path: '',
    component: AlphabetComponent,
    title: 'Alfabeto inglés',
    data: {
      metaTags: {
        description: 'Aprende a pronunciar las letras del alfabeto inglés en español.',
        keywords: ['pronunciacion', 'alfabeto', 'ingles'],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
