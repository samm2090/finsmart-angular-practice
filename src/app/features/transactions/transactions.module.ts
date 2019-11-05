import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//routes
import { TransactionsRoutes } from './transactions.routes';

//components
import { TransactionsAdminComponent } from './components/transactions-admin/transactions-admin.component';
import { TransactionsInvestorComponent } from './components/transactions-investor/transactions-investor.component';

@NgModule({
  declarations: [TransactionsAdminComponent, TransactionsInvestorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TransactionsRoutes)
  ]
})
export class TransactionsModule { }
