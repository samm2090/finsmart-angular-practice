import { Routes } from '@angular/router';

//Components
import { CreateAccountClientComponent } from './components/create-account-client/create-account-client.component';
import { CreateAccountInvestorComponent } from './components/create-account-investor/create-account-investor.component';

export const CreateAccountRoutes: Routes = [
  { path: 'client', component: CreateAccountClientComponent },
  { path: 'investor', component: CreateAccountInvestorComponent }
];
