import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from './../../shared/shared.module';

//Routes
import { HomeRoutes } from './home.routes';

//component
import { HomeComponent } from './components/home.component';
import { LoginFormComponent } from './../../forms/login-form/login-form.component';


@NgModule({
  declarations: [HomeComponent, LoginFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
