import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { ClientsComponent } from './components/clients/clients.component';

//routes
import { ClientsRoutes } from './clients.routes';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientsRoutes)
  ]
})
export class ClientsModule { }
