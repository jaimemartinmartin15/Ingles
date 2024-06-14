import { Routes } from "@angular/router";
import { MenuComponent } from "./menu.component";

export const MENU_ROUTES: Routes = [
  {
    path: '',
    component: MenuComponent,
    title: 'Practica inglés',
    data: {
      metaTags: {
        description: 'Aprende las formas verbales, el alfabeto y su pronunciación y repasa.',
        keywords: ['verbos', 'ingles', 'alfabeto', 'pronunciacion', 'repaso'],
      }
    }
  },
  {
    path: '**',
    redirectTo: '',
  },
];
