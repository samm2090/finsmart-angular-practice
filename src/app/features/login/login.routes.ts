import { Routes } from '@angular/router';

//Components
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginInvestorComponent } from './components/login-investor/login-investor.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

export const LoginRoutes: Routes = [
  { path: 'client', component: LoginClientComponent },
  { path: 'investor', component: LoginInvestorComponent },
  { path: 'admin', component: LoginAdminComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'client' },
  { path: '', pathMatch: 'full', redirectTo: 'client' }
];
