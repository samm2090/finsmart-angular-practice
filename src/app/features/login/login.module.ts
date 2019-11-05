//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginInvestorComponent } from './components/login-investor/login-investor.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

//Routes
import { LoginRoutes } from './login.routes';

@NgModule({
  declarations: [LoginInvestorComponent, LoginAdminComponent, LoginClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes)
  ]
})
export class LoginModule { }
