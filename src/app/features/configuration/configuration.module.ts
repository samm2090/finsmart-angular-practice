import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Routes
import { ConfigurationRoutes } from './configuration.routes';

//components
import { ConfigurationComponent } from './components/configuration/configuration.component';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ConfigurationRoutes)
  ]
})
export class ConfigurationModule { }
