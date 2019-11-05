import { Routes } from '@angular/router';

//component
import { BankAccountsClientComponent } from './components/bank-accounts-client/bank-accounts-client.component';
import { BankAccountsInvestorComponent } from './components/bank-accounts-investor/bank-accounts-investor.component';

export const BankAccountsRoutes: Routes = [
  { path: 'client', component: BankAccountsClientComponent },
  { path: 'investor', component: BankAccountsInvestorComponent }
];
