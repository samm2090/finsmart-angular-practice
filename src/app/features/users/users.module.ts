import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';

//Routes
import { UserRoutes } from './users.routes';

//components
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UsersModule { }
