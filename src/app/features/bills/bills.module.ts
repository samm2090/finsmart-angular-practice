import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Routes
import { BillsRoutes } from './bills.routes';

//components
import { BillsAdminComponent } from './components/bills-admin/bills-admin.component';
import { BillsClientComponent } from './components/bills-client/bills-client.component';
import { BillsInvestorComponent } from './components/bills-investor/bills-investor.component';

@NgModule({
  declarations: [BillsAdminComponent, BillsClientComponent, BillsInvestorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BillsRoutes)
  ]
})
export class BillsModule { }
