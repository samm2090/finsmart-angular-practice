import { Routes } from '@angular/router';

// components
import { BillsAdminComponent } from './components/bills-admin/bills-admin.component';
import { BillsClientComponent } from './components/bills-client/bills-client.component';
import { BillsInvestorComponent } from './components/bills-investor/bills-investor.component';

export const BillsRoutes: Routes = [
  { path: 'admin', component: BillsAdminComponent },
  { path: 'client', component: BillsClientComponent },
  { path: 'investor', component: BillsInvestorComponent }
];
