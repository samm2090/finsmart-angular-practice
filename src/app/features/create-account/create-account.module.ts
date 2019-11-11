import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from './../../shared/shared.module';

//routes
import { CreateAccountRoutes } from './create-account.routes';

//components
import { CreateAccountInvestorComponent } from './components/create-account-investor/create-account-investor.component';
import { CreateAccountClientComponent } from './components/create-account-client/create-account-client.component';

@NgModule({
  declarations: [CreateAccountInvestorComponent, CreateAccountClientComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CreateAccountRoutes)
  ]
})
export class CreateAccountModule { }
