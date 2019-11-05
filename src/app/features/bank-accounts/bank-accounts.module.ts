import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Routes
import { BankAccountsRoutes } from './bank-accounts.routes';

//component
import { BankAccountsClientComponent } from './components/bank-accounts-client/bank-accounts-client.component';
import { BankAccountsInvestorComponent } from './components/bank-accounts-investor/bank-accounts-investor.component';

@NgModule({
  declarations: [BankAccountsClientComponent, BankAccountsInvestorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BankAccountsRoutes)
  ]
})
export class BankAccountsModule { }
