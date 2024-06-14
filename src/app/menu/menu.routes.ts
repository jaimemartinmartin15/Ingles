import { Routes } from "@angular/router";
import { MenuComponent } from "./menu.component";

export const MENU_ROUTES: Routes = [
  {
    path: '',
    component: MenuComponent,
    title: 'Practica inglés',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
