import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { InvestorsComponent } from './features/investors/investors.component';
import { ClientsComponent } from './features/clients/clients.component';
import { ConfigurationComponent } from './features/configuration/configuration.component';
import { BillsComponent } from './features/bills/bills.component';
import { CreateAccountComponent } from './features/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    InvestorsComponent,
    ClientsComponent,
    ConfigurationComponent,
    BillsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
