import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Routes
import { UserRoutes } from './users.routes';

//components
import { ClientsComponent } from './components/clients/clients.component';
import { EditComponent } from './components/clients/edit.component';

@NgModule({
  declarations: [ClientsComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UsersModule { }
