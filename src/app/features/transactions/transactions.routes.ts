import { Routes } from '@angular/router';

//components
import { TransactionsAdminComponent } from './components/transactions-admin/transactions-admin.component';
import { TransactionsInvestorComponent } from './components/transactions-investor/transactions-investor.component';

export const TransactionsRoutes: Routes = [
  { path: 'admin', component: TransactionsAdminComponent },
  { path: 'investor', component: TransactionsInvestorComponent }
];
