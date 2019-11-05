import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '/path', loadChildren: '' },


  { path: '**', pathMatch: 'full', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' }
];
